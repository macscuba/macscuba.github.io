// Created by iWeb 3.0.4 local-build-20191026

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.mikeandgailk.com/Travel/Cruise_-_2001_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.mikeandgailk.com/Travel',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.mikeandgailk.com/Travel',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,36),new IWSize(229,242),27,27,0,new IWSize(21,23)),new IWPhotoFrame([IWCreateImage('Cruise_-_2001_files/NewTravel_C_TL.png'),IWCreateImage('Cruise_-_2001_files/NewTravel_S_T.png'),IWCreateImage('Cruise_-_2001_files/NewTravel_C_TR.png'),IWCreateImage('Cruise_-_2001_files/NewTravel_S_R.png'),IWCreateImage('Cruise_-_2001_files/NewTravel_C_BR.png'),IWCreateImage('Cruise_-_2001_files/NewTravel_S_B.png'),IWCreateImage('Cruise_-_2001_files/NewTravel_C_BL.png'),IWCreateImage('Cruise_-_2001_files/NewTravel_S_L.png')],null,1,0.900000,71.000000,0.000000,62.000000,62.000000,83.000000,9.000000,73.000000,77.000000,8.000000,8.000000,8.000000,9.000000,null,null,null,0.400000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Cruise_-_2001_files/Cruise_-_2001Moz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Cruise_-_2001_files','shapeimage_2','0');fixupIECSS3Opacity('id2');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
