---
layout: post
title: Youtube Thumbnail Downloader
---
<style>
  #outImg,.input-box{text-align:center}.yt-thumb{margin:40px 0}#valid p{color:var(--light);margin:20px 0;font-weight:500;padding:7px 10px;display:inline-block;border-radius:5px;background:rgba(255,0,0,.7)}#outImg{margin-top:40px;grid-gap:20px}#outImg>div{display:grid;place-items:center}#outImg label{font-size:20px;font-weight:500}#outImg img{margin:20px auto}
</style>
<div class="yt-thumb">
  <div class="input-box">
    <input type="text" placeholder="Enter Youtube Video URL" id="in-url" />
    <button id="sub-btn">Get Thumbnail</button>
  </div>
  <div class="none place-items-center" id="valid">
    <p>Enter a valid Youtube URL</p>
  </div>
  <div class="none" id="outImg">
    <div>
      <label>Max Quality (1280x720)</label>
      <img alt="Youtube Thumbnail Downloader">
      <a>MQ Download</a>
    </div>
    <hr>
    <div>
      <label>SD Quality (640x480)</label>
      <img alt="Youtube Thumbnail Downloader">
      <a>SD Download</a>
    </div>
    <hr>
    <div>
      <label>High Quality (480x360)</label>
      <img alt="Youtube Thumbnail Downloader">
      <a>HQ Download</a>
    </div>
    <hr>
    <div>
      <label>Medium Quality (320x180)</label>
      <img alt="Youtube Thumbnail Downloader">
      <a>MQ Download</a>
    </div>
    <hr>
    <div>
      <label>Normal Quality (120x90)</label>
      <img alt="Youtube Thumbnail Downloader">
      <a>Normal Download</a>
    </div>
  </div>
</div>
<script>
  const in_url=document.querySelector("#in-url"),sub_btn=document.querySelector("#sub-btn"),valid=document.querySelector("#valid"),outImg=document.querySelector("#outImg"),img=document.querySelectorAll("#outImg img"),a=document.querySelectorAll("#outImg a");sub_btn.onclick=()=>{let f=in_url.value,b=f.replace("https://","").split("/"),c="";b.includes("embed")?c=b[b.length-1]:b.includes("m.youtube.com")?c=b[b.length-1].replace("watch?v=",""):b.includes("www.youtube.com")?c=b[b.length-1].replace("watch?v=",""):b.includes("youtube.com")?c=b[b.length-1].replace("watch?v=",""):b.includes("youtu.be")?c=b[b.length-1].split("?")[0]:11==b[0].length?c=b[0]:(c=void 0,valid.classList.replace("none","grid"));let g=`https://img.youtube.com/vi/${c}/default.jpg`,h=`https://img.youtube.com/vi/${c}/mqdefault.jpg`,i=`https://img.youtube.com/vi/${c}/hqdefault.jpg`,j=`https://img.youtube.com/vi/${c}/sddefault.jpg`,k=`https://img.youtube.com/vi/${c}/maxresdefault.jpg`,l=`https://thumbnailphoto.net/download.php?id=${c}&quality=HD`,m=`https://thumbnailphoto.net/download.php?id=${c}&quality=SD`,n=`https://thumbnailphoto.net/download.php?id=${c}&quality=HQ`,o=`https://thumbnailphoto.net/download.php?id=${c}&quality=MQ`,p=`https://thumbnailphoto.net//download.php?id=${c}&quality=def`,e=[k,j,i,h,g],q=[l,m,n,o,p];for(let d=0;d<e.length;d++)img[d].src=e[d],a[d].href=q[d],a[d].classList.add("btn");outImg.classList.replace("none","grid")}
</script>