// Created by iWeb 3.0.4 local-build-20170222

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.mikeandgailk.com/cabin/Cabin_Home_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.mikeandgailk.com/cabin',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.mikeandgailk.com/cabin',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(241,241),new IWSize(241,34),new IWSize(290,290),27,27,0,new IWSize(17,17)),new IWPhotoFrame([IWCreateImage('Cabin_Home_files/Watercolor_iweb_01.png'),IWCreateImage('Cabin_Home_files/Watercolor_iweb_02.png'),IWCreateImage('Cabin_Home_files/Watercolor_iweb_04.png'),IWCreateImage('Cabin_Home_files/Watercolor_iweb_08.png'),IWCreateImage('Cabin_Home_files/Watercolor_iweb_16.png'),IWCreateImage('Cabin_Home_files/Watercolor_iweb_14.png'),IWCreateImage('Cabin_Home_files/Watercolor_iweb_13.png'),IWCreateImage('Cabin_Home_files/Watercolor_iweb_05.png')],null,0,0.700000,0.000000,0.000000,0.000000,0.000000,12.000000,12.000000,11.000000,11.000000,13.000000,12.000000,13.000000,12.000000,null,null,null,0.500000),imageStream,range,null,null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Cabin_Home_files/Cabin_HomeMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id6');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
