---
layout: post
title: Youtube Thumbnail Downloader
---

<style>
  .yt-thumb {
    margin: 40px 0;
  }
  .input-box {
    text-align: center;
  }
  #valid p {
    color: var(--light);
    margin: 20px 0;
    font-weight: 500;
    padding: 7px 10px;
    display: inline-block;
    border-radius: 5px;
    background: rgba(255, 0, 0, 0.7)
  }
  #outImg {
    text-align: center;
    margin-top: 40px;
    grid-gap: 20px;
  }
  #outImg>div {
    display: grid;
    place-items: center;
  }
  #outImg label {
    font-size: 20px;
    font-weight: 500;
  }
  #outImg img {
    margin: 20px auto;
  }
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
  const in_url = document.querySelector('#in-url'),
    sub_btn = document.querySelector('#sub-btn'),
    valid = document.querySelector('#valid'),
    outImg = document.querySelector('#outImg'),
    img = document.querySelectorAll('#outImg img'),
    a = document.querySelectorAll('#outImg a')

  sub_btn.onclick = () => {
    const
      ytURL = in_url.value,
      splitURL = ytURL.replace('https://', '').split('/')

    let ytID = ''

    if (splitURL.includes('embed')) {
      ytID = splitURL[splitURL.length - 1]
    }
    else if (splitURL.includes('m.youtube.com')) {
      ytID = splitURL[splitURL.length - 1].replace('watch?v=', '')
    }
    else if (splitURL.includes('www.youtube.com')) {
      ytID = splitURL[splitURL.length - 1].replace('watch?v=', '')
    }
    else if (splitURL.includes('youtube.com')) {
      ytID = splitURL[splitURL.length - 1].replace('watch?v=', '')
    }
    else if (splitURL.includes('youtu.be')) {
      ytID = splitURL[splitURL.length - 1].split('?')[0]
    }
    else if (splitURL[0].length == 11) {
      ytID = splitURL[0]
    }
    else {
      ytID = undefined
      valid.classList.replace('none', 'grid')
    }
    const
      df = `https://img.youtube.com/vi/${ytID}/default.jpg`,
      mq = `https://img.youtube.com/vi/${ytID}/mqdefault.jpg`,
      hq = `https://img.youtube.com/vi/${ytID}/hqdefault.jpg`,
      sd = `https://img.youtube.com/vi/${ytID}/sddefault.jpg`,
      mx = `https://img.youtube.com/vi/${ytID}/maxresdefault.jpg`

    const
      HD = `https://thumbnailphoto.net/download.php?id=${ytID}&quality=HD`,
      SD = `https://thumbnailphoto.net/download.php?id=${ytID}&quality=SD`,
      HQ = `https://thumbnailphoto.net/download.php?id=${ytID}&quality=HQ`,
      MQ = `https://thumbnailphoto.net/download.php?id=${ytID}&quality=MQ`,
      def = `https://thumbnailphoto.net//download.php?id=${ytID}&quality=def`

    const imgArray = [mx, sd, hq, mq, df]
    const aArray = [HD, SD, HQ, MQ, def]

    for (let i = 0; i < imgArray.length; i++) {
      img[i].src = imgArray[i]
      a[i].href = aArray[i]
      a[i].classList.add('btn')
    }
    outImg.classList.replace('none', 'grid')
  }
</script>