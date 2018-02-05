//
//  SetOptionMenuPlugin.m
//  ZQuanProject
//
//  Created by 王园园 on 2017/12/18.
//  Copyright © 2017年 zquan. All rights reserved.
//

#import "SetOptionMenuPlugin.h"

@implementation SetOptionMenuPlugin

-(void)initMessageJson:(NSDictionary *)message
{
    [super initMessageJson:message];
    
    if(IS_DICTIONARY_CLASS(message[@"param"])){
        NSDictionary *param = message[@"param"];
        [self.webVC initOptinMenuLayoutWithParam:param];
    }
}

@end
