//
//  ZQUIWebViewController.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/24.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "ZQUIWebViewController.h"
#import "Helper.h"
#import "NSURLProtocol+WebKitSupport.h"
#import "HDHud.h"
#import "ZQWebVCSingleton.h"


@interface ZQUIWebViewController ()<UIWebViewDelegate>

@end

@implementation ZQUIWebViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    //添加到主控制器
    [self.view addSubview:self.webView];
    [self registJS];
    
    if (@available(iOS 11.0, *)){
        self.webView.scrollView.contentInsetAdjustmentBehavior = UIScrollViewContentInsetAdjustmentNever;
    }
    
    [NSURLProtocol wk_registerScheme:@"http"];
    [NSURLProtocol wk_registerScheme:@"https"];
    [NSURLProtocol wk_registerScheme:@"h5container.message"];
    
    [self LoadWebUrl];
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(appActive:) name:KObserveAPPActiveNotify object:nil];
}



- (void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    _webView.delegate = self;
    [ZQWebVCSingleton shareInstance].webVC = self;
}


-(void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
    
    //读通知栏消息
    NSString *notifyUrl = [[NSUserDefaults standardUserDefaults] objectForKey:K_ReceiveNotifyURL];
    if(!IsEmptyStr(notifyUrl)){
        ZQUIWebViewController *webVC = [[ZQUIWebViewController alloc] init];
        webVC.URLString = notifyUrl;
        webVC.hideNavBar = NO;
        webVC.showBackButton = YES;
        webVC.refreshState = YES;
        [self.navigationController pushViewController:webVC animated:YES];
        [[NSUserDefaults standardUserDefaults] removeObjectForKey:K_ReceiveNotifyURL];
    }
}

#pragma mark ================ 加载 ================
-(void)LoadWebUrl
{
    NSURLRequest *request =[NSURLRequest requestWithURL:[NSURL URLWithString:self.URLString] cachePolicy:NSURLRequestReloadRevalidatingCacheData timeoutInterval:60];
    [self.webView loadRequest:request];
}


-(void)registJS
{
    NSString *path = [[NSBundle mainBundle] pathForResource:@"h5_bridge.js" ofType:nil];
    NSString *js = [[NSString alloc] initWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil];
    
    [self.webView stringByEvaluatingJavaScriptFromString:[NSString stringWithFormat:@"var script = document.createElement('script');"
                                                          "script.type = 'text/javascript';"
                                                          "script.text = %@", js]];
    
}

/**
 app退出后台时 保存cookie
 */
-(void)appActive:(NSNotification *)notify
{
    if([[notify object] boolValue]==NO){
        //app will regist
        NSHTTPCookie *cookie;
        NSHTTPCookieStorage *cookies = [NSHTTPCookieStorage sharedHTTPCookieStorage];
        NSArray *cookiesURL = [cookies cookiesForURL:[NSURL URLWithString:WEBURL]];
        
        for (id c in cookiesURL)
        {
            if ([c isKindOfClass:[NSHTTPCookie class]])
            {
                cookie=(NSHTTPCookie *)c;
                //                if ([cookie.name isEqualToString:@"sessionid"]) {
                NSDate *expiresDate = [NSDate dateWithTimeIntervalSinceNow:NSUIntegerMax];
                NSArray *cookies = [NSArray arrayWithObjects:cookie.name, cookie.value, expiresDate, cookie.domain, cookie.path, nil];
                if(cookies){
                    NSMutableDictionary *cookieProperties = [NSMutableDictionary dictionary];
                    [cookieProperties setObject:[cookies objectAtIndex:0] forKey:NSHTTPCookieName];
                    [cookieProperties setObject:[cookies objectAtIndex:1] forKey:NSHTTPCookieValue];
                    [cookieProperties setObject:[cookies objectAtIndex:2] forKey:NSHTTPCookieExpires];
                    [cookieProperties setObject:[cookies objectAtIndex:3] forKey:NSHTTPCookieDomain];
                    [cookieProperties setObject:[cookies objectAtIndex:4] forKey:NSHTTPCookiePath];
                    
                    NSHTTPCookie *cookieuser = [NSHTTPCookie cookieWithProperties:cookieProperties];
                    [[NSHTTPCookieStorage sharedHTTPCookieStorage]  setCookie:cookieuser];
                    //                    }
                    //                    break;
                }
            }
        }
        
    }
}

#pragma mark ================ UIWebViewDelegate ================
- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType;
{
    return YES;
}

- (void)webViewDidStartLoad:(UIWebView *)webView;
{
    NSLog(@"网页开始加载");
}

- (void)webView:(UIWebView *)webView didFailLoadWithError:(NSError *)error;
{
    NSLog(@"网页加载失败：%@",error);
    [self endRefresh];
}

- (void)webViewDidFinishLoad:(UIWebView *)webView
{
    [self registJS];
    [[UIApplication sharedApplication] setNetworkActivityIndicatorVisible:NO];
    
    if(_readTitle){
        self.navTitle =  [_webView stringByEvaluatingJavaScriptFromString:@"document.title"];
    }
    [self endRefresh];
}


#pragma mark ================ 控件加载 ================

- (UIWebView *)webView{
    if (!_webView) {
        _webView = [[UIWebView alloc] initWithFrame:CGRectMake(0,64, kMainBoundsWidth,kMainBoundsHeight-64)];
        if(self.hideNavBar){
            _webView.frame = [UIScreen mainScreen].bounds;
        }
        _webView.delegate = self;
        _webView.backgroundColor = [UIColor clearColor];
        [_webView sizeToFit];
    }
    return _webView;
}


#pragma mark -  左边按钮
-(void)backEvent{
    NSString *backJS = @"ZhuanQuanJSBridge.trigger('back');";
    [_webView stringByEvaluatingJavaScriptFromString:backJS];
}


-(void)emitWithEvenName:(NSString *)event Param:(NSString *)paramStr
{
    NSString *JS = [NSString stringWithFormat:@"ZhuanQuanJSBridge.emit('resume',%@)",paramStr];
    [_webView stringByEvaluatingJavaScriptFromString:JS];

    [self.navigationController popViewControllerAnimated:YES];
}

#pragma mark -  右边按钮
-(void)OptionMenuEvent
{
    NSString *JS = @"ZhuanQuanJSBridge.emit('optionMenu');";
    [_webView stringByEvaluatingJavaScriptFromString:JS];
}


#pragma mark -  添加刷新
-(void)setIsdoFresh:(BOOL)isdoFresh
{
    if(_refreshControl){
        if(isdoFresh==NO){
            //阻止刷新
            [_refreshControl endRefreshing];
        }else{
            [_webView reload];
        }
    }
    
}

-(void)setRefreshState:(BOOL)refreshState
{
    if(refreshState){
        if(!_refreshControl){
            self.refreshControl = [[UIRefreshControl alloc] init];
            self.refreshControl.attributedTitle = [[NSAttributedString alloc] initWithString:@"努力加载中……"];
            self.refreshControl.tintColor = [UIColor grayColor];
            [self.refreshControl addTarget:self action:@selector(refreshAction) forControlEvents:UIControlEventValueChanged];
        }
        
        if (@available(iOS 10.0, *)) {
            self.webView.scrollView.refreshControl = _refreshControl;
        } else {
            // Fallback on iOS 10 earlier versions
            [self.webView addSubview:_refreshControl];
        }
        
    }else{
        if (@available(iOS 10.0, *)) {
            self.webView.scrollView.refreshControl = nil;
        } else {
            [_refreshControl removeFromSuperview];
        }
    }
}


- (void)refreshAction{
    //下拉转圈 触发fresh
    NSString *backJS = @"ZhuanQuanJSBridge.trigger('refresh');";
    [_webView stringByEvaluatingJavaScriptFromString:backJS];
}

-(void)endRefresh{
    if(_refreshControl.refreshing){
        [_refreshControl endRefreshing];
    }
}

#pragma mark ================ WillDisappear ================
-(void)viewWillDisappear:(BOOL)animated{
    
    [self.webView setDelegate:nil];
}


//注意，观察的移除
-(void)dealloc{
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end