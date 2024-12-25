---
title: 'こいつらいつ使うん埋め込み集'
date: '2024-5-21'
tag: ['tips', 'Markdown']
lead: 'ブログ内に埋め込むことができるコンテンツたちの代表例をまとめました'
author_name_main: '二渡　和輝'
---

いつ使うのか分かりませんが、こんなもの埋め込めますよというのをリストアップします。
基本的にはHTMLに埋め込めるものは使えるようです。

## Web サイト

```html
<iframe src="https://www.takahashi.qse.tohoku.ac.jp" class="w-full"></iframe>
```

<iframe src="https://www.takahashi.qse.tohoku.ac.jp" class="w-full aspect-[16/9]"></iframe>

## Google Map

```html
<iframe
  class="aspect-[16/9]"
  frameborder="0"
  title="map"
  marginheight="0"
  marginwidth="0"
  scrolling="no"
  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2220.7717857620264!2d140.836551948494!3d38.25521785690698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x5f8a28567b9e0203%3A0x966a44e822756a66!2z6Z2S6JGJ5bGx!3m2!1d38.255548!2d140.83552559999998!4m5!1s0x5f8a28570c44e331%3A0x856877930a591764!2z57eP5ZCI56CU56m25qOf!3m2!1d38.2545539!2d140.8394304!5e0!3m2!1sja!2sjp!4v1701865600982!5m2!1sja!2sjp"
  width="100%"
  allowfullscreen=""
  oading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
>
</iframe>
```

<iframe class="aspect-[16/9]" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2220.7717857620264!2d140.836551948494!3d38.25521785690698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x5f8a28567b9e0203%3A0x966a44e822756a66!2z6Z2S6JGJ5bGx!3m2!1d38.255548!2d140.83552559999998!4m5!1s0x5f8a28570c44e331%3A0x856877930a591764!2z57eP5ZCI56CU56m25qOf!3m2!1d38.2545539!2d140.8394304!5e0!3m2!1sja!2sjp!4v1701865600982!5m2!1sja!2sjp" width="100%" allowfullscreen="" oading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

## CodePen

```html
<p
  class="codepen"
  data-height="300"
  data-default-tab="html,result"
  data-slug-hash="mdYPywN"
  data-pen-title="Untitled"
  data-user="Futty93"
  style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
>
  <span
    >See the Pen
    <a href="https://codepen.io/Futty93/pen/mdYPywN"> Untitled</a> by Futty93
    (<a href="https://codepen.io/Futty93">@Futty93</a>) on
    <a href="https://codepen.io">CodePen</a>.</span
  >
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
```

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="mdYPywN" data-pen-title="Untitled" data-user="Futty93" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Futty93/pen/mdYPywN">
  Untitled</a> by Futty93 (<a href="https://codepen.io/Futty93">@Futty93</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Asciinema

```html
<script
  id="asciicast-7592"
  src="https://asciinema.org/a/7592.js"
  async
></script>
```

<script id="asciicast-7592" src="https://asciinema.org/a/7592.js" async></script>

## Figma

```html
<iframe
  class="aspect-[16/9]"
  style="border: 1px solid rgba(0, 0, 0, 0.1);"
  height="auto"
  width="100%"
  src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File"
  allowfullscreen
>
</iframe>
```

<iframe class="aspect-[16/9]" style="border: 1px solid rgba(0, 0, 0, 0.1);" height="auto" width="100%" src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File" allowfullscreen ></iframe>

## Speaker Deck

```html
<iframe
  class="speakerdeck-iframe"
  frameborder="0"
  src="https://speakerdeck.com/player/cd6be68a4e2145068d58808c51318a1a"
  title="使いにくいヒューマンインターフェースの館"
  allowfullscreen="true"
  style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 16 / 9;"
  data-ratio="1.7777777777777777"
>
</iframe>
```

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/cd6be68a4e2145068d58808c51318a1a" title="使いにくいヒューマンインターフェースの館" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 16 / 9;" data-ratio="1.7777777777777777"></iframe>

## SlideShare

```html
<iframe
  class="aspect-[16/9]"
  src="//www.slideshare.net/slideshow/embed_code/key/B6SfqHFrWhihpr"
  width="100%"
  height="auto"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  scrolling="no"
  style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"
  loading="lazy"
  allowfullscreen
>
</iframe>
```

<iframe class="aspect-[6/5]" src="//www.slideshare.net/slideshow/embed_code/key/B6SfqHFrWhihpr" width="100%" height="auto" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" loading="lazy" allowfullscreen></iframe>

## Google Slide

```html
<iframe
  class="aspect-[16/9]"
  src="https://docs.google.com/presentation/d/e/2PACX-1vT6_5Wrpyx9_rwW2CR4EvwzSrpK1K-8wM9bPScv8KIbbIDVTUAEk7T2ZQQWtqDlhJyyHapESHmbFVTu/embed?start=false&loop=false&delayms=3000"
  frameborder="0"
  width="100%"
  height="auto"
  allowfullscreen="true"
  mozallowfullscreen="true"
  webkitallowfullscreen="true"
>
</iframe>
```

<iframe class="aspect-[16/9]" src="https://docs.google.com/presentation/d/e/2PACX-1vT6_5Wrpyx9_rwW2CR4EvwzSrpK1K-8wM9bPScv8KIbbIDVTUAEk7T2ZQQWtqDlhJyyHapESHmbFVTu/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="auto" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Docswell

```html
<script
  async
  class="docswell-embed"
  src="https://www.docswell.com/assets/libs/docswell-embed/docswell-embed.min.js"
  data-src="https://www.docswell.com/slide/LK7J5V/embed"
  data-aspect="0.5625"
></script>
<div class="docswell-link">
  <a href="https://www.docswell.com/s/ku-suke/LK7J5V-hello-docswell"
    >Docswell（ドクセル）はじめました by @ku-suke</a
  >
</div>
```

<script async class="docswell-embed" src="https://www.docswell.com/assets/libs/docswell-embed/docswell-embed.min.js" data-src="https://www.docswell.com/slide/LK7J5V/embed" data-aspect="0.5625"></script><div class="docswell-link"><a href="https://www.docswell.com/s/ku-suke/LK7J5V-hello-docswell">Docswell（ドクセル）はじめました by @ku-suke</a></div>

## Youtube

```html
<iframe
  class="aspect-[16/9] h-full w-full"
  src="https://www.youtube.com/embed/nue-bLFGKK8?si=f07CP0PP8KIReCMn"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
>
</iframe>
```

<iframe class="h-full w-full aspect-[16/9]" src="https://www.youtube.com/embed/nue-bLFGKK8?si=f07CP0PP8KIReCMn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
