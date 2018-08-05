#import <Cordova/CDVPlugin.h>
#import <AMapLocationKit/AMapLocationKit.h>


@interface XGaoDeLocation : CDVPlugin {}

@property (retain, nonatomic) IBOutlet NSString *callback;

/// @property (nonatomic, strong) AMapLocationManager *locationManager;
@property (nonatomic, retain) AMapLocationManager *locationManager;

- (void) initConfig;

- (void)getCurrentPosition:(CDVInvokedUrlCommand*)command;

- (void)watchPosition:(CDVInvokedUrlCommand*)command;

- (void)clearWatch:(CDVInvokedUrlCommand*)command;

@end