# laicigou-browser-script

使用方法：
1. Chrome浏览器，按F12，找到Console选项卡，然后把buy.js文件中代码完整贴进去；
2. 然后会不断有验证码图片出来，并弹窗，需要你输入，并按回车；
3. 重复2。如果想歇一会，可以在弹窗中直接输入stop。再想开始识别验证码，可以在Console输入startCaptcha()；
4. 如果遇到难以识别的验证码，可以在弹窗中输入skip，跳过它。

默认竞价策略：
1. 找到低于首页均价40微积分的狗，买入其中价格最低的；
2. 将普通狗以低于首页均价20微积分卖出，以保证短时间内会卖掉。
