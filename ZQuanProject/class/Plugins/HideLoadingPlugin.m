//
//  HideLoadingPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "HideLoadingPlugin.h"

@implementation HideLoadingPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(![Helper isBlankString:message[@"param"]]){

        [HDHud hideHUDInView:[UIApplication sharedApplication].keyWindow];
    }
    
}

@end