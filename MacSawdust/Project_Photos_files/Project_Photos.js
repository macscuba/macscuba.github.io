// Created by iWeb 3.0.4 local-build-20180115

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.mikeandgailk.com/MacSawdust/Project_Photos_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.mikeandgailk.com/MacSawdust',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.mikeandgailk.com/MacSawdust',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(287,287),new IWSize(287,32),new IWSize(344,334),27,27,0,new IWSize(31,34)),new IWPhotoFrame([IWCreateImage('Project_Photos_files/Freestyle_01.png'),IWCreateImage('Project_Photos_files/Freestyle_02.png'),IWCreateImage('Project_Photos_files/Freestyle_03.png'),IWCreateImage('Project_Photos_files/Freestyle_06.png'),IWCreateImage('Project_Photos_files/Freestyle_09.png'),IWCreateImage('Project_Photos_files/Freestyle_08.png'),IWCreateImage('Project_Photos_files/Freestyle_07.png'),IWCreateImage('Project_Photos_files/Freestyle_04.png')],null,2,0.800000,3.000000,3.000000,3.000000,3.000000,22.000000,24.000000,23.000000,25.000000,166.000000,222.000000,166.000000,222.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Project_Photos_files/Project_PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
