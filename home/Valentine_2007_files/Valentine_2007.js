// Created by iWeb 3.0.4 local-build-20170222

function createMediaStream_id4()
{return IWCreatePhotocast("http://www.mikeandgailk.com/home/Valentine_2007_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.mikeandgailk.com/home',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.mikeandgailk.com/home',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(2,new IWSize(270,270),new IWSize(270,30),new IWSize(324,315),27,27,0,new IWSize(36,44)),new IWPhotoFrame([IWCreateImage('Valentine_2007_files/dots_ul.png'),IWCreateImage('Valentine_2007_files/dots_top.png'),IWCreateImage('Valentine_2007_files/dots_ur.png'),IWCreateImage('Valentine_2007_files/dots_right.png'),IWCreateImage('Valentine_2007_files/dots_lr.png'),IWCreateImage('Valentine_2007_files/dots_bottom.png'),IWCreateImage('Valentine_2007_files/dots_ll.png'),IWCreateImage('Valentine_2007_files/dots_left.png')],null,0,1.000000,74.000000,7.000000,74.000000,18.000000,92.000000,25.000000,92.000000,44.000000,438.000000,316.000000,438.000000,316.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Valentine_2007_files/Valentine_2007Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id6');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
