---
title: '研究室ブログで利用できるマークダウンチートシート'
date: '2024-5-21'
tag: ['tips', 'Markdown']
lead: '研究室ブログ内で利用できるマークダウンの記法一覧です'
cover: './image.png'
author_name_main: '二渡　和輝'
---

研究室内のブログでは実はさまざまなMarkdown記法が利用可能です。
この記事を参照しながら色々利用してみてください！

> このブログでは研究室のブログで利用できる記法のみを記載しています。
> より一般的なマークダウンの記法については
> [Qiita "Markdown記法 チートシート"](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)を確認してください。

# テキストの装飾

## 見出し
研究室ブログでは当然ですが、見出しタグを利用することができます。
また見出しタグを検出して目次を生成しているため、適切に見出しを利用することはとても大切です。
階層に応じてh1 ~ h6まで利用可能です。
```md
# これはh1タグです
## これはh2タグです
###### これはh6タグです
```
> ※ #の後ろに半角スペースが必要です。

**出力**
# これはh1タグです
## これはh2タグです
###### これはh6タグです

## 強調・強勢
*強調*　**強勢**
```md
_ か * で囲むとHTMLのemタグになります。ここでは *italic type* になります。
__ か ** で囲むとHTMLのstrongタグになります。ここでは **太字にアンダーライン** になります。
```
**出力**
_ か * で囲むとHTMLのemタグになります。ここでは *italic type* になります。
__ か ** で囲むとHTMLのstrongタグになります。ここでは **太字にアンダーライン** になります。

## 打ち消し線
~~打ち消し~~
```md
打ち消し線を使うには ~~ で囲みます。 ~~打ち消し~~
```

**出力**
打ち消し線を使うには ~~ で囲みます。 ~~打ち消し~~

## 折りたたみ
このブログではHTMLを直接書き込むことができます。
一例として折りたたみを紹介します。

```html
<!-- open属性なし -->
<details><summary>サンプルコード（open属性なし）</summary>

初期状態では閉じています
</details>

<!-- open属性あり -->
<details open><summary>サンプルコード（open属性あり）</summary>

初期状態で開いています
</details>
```
**出力**
<!-- open属性なし -->
<details><summary>サンプルコード（open属性なし）</summary>

初期状態では閉じています
</details>

<!-- open属性あり -->
<details open><summary>サンプルコード（open属性あり）</summary>

初期状態で開いています
</details>

<!-- ## 補足・注意・警告
> [!NOTE]
> 補足などのメッセージ

> [!TIP]
> tipのメッセージ

> [!IMPORTANT]
> 重要なメッセージ

> [!WARNING]
> 警告のメッセージ

> [!CAUTION]
> より強い警告のメッセージ 

ノート記法内でのMarkdown記法の使用
現在ノート記法内でサポートしているMarkdown記法は以下となっています。

リスト
強調
打ち消し線
コードスパン
リンク
画像
コードブロック
-->

# リスト
このブログではリストも利用可能です。
## 順序なしリスト(箇条書きリスト)
* 文頭に`*` `+` `-`のいずれかをつけると順序なしリストとなります。
  * ネストすることも可能です。

## 順序ありリスト
1. 文頭に`数字 + .`をつけることで順序付きリストとなります。
   1. ネストすることも可能です。

適切にインデントを入れることで次のようなリストも作成可能です。
1. 番号付きリスト
2. 番号付きリスト
   1. ネストされた番号付きリスト
   2. ネストされた番号付きリスト
      * こんなこともできる
   3. ネストされた番号付きリスト
3. 番号付きリスト

## 説明付きリスト
HTMLを直接書き込むことで説明付きのリストも作成可能です。
```html
<dl>
  <dt>高橋先生</dt>
  <dd>教授</dd>
  <dt>狩川先生</dt>
  <dd>准教授</dd>
</dl>
```
**出力**
<dl>
  <dt>高橋先生</dt>
  <dd>教授</dd>
  <dt>狩川先生</dt>
  <dd>准教授</dd>
</dl>

## チェックボックス
順序なしリストの記号の後に`[ ]`を入力することで チェックボックスも利用できます。
`[x]`とすることでチェックが入ったチェックボックスにできます。
```md
- [ ] タスク1
- [x] タスク2
```
**出力**
- [ ] タスク1
- [x] タスク2

# リンク
URLを埋め込んだ文字リンクを作成することができます。
```md
[高橋・狩川研究室](https://www.takahashi.qse.tohoku.ac.jp)
```
**出力**
[高橋・狩川研究室](https://www.takahashi.qse.tohoku.ac.jp)

またカーソルを乗せることで表示されるタイトルを指定することもできます。
```md
[高橋・狩川研究室](https://www.takahashi.qse.tohoku.ac.jp "高橋・狩川研究室のホームページです")
```
**出力**
[高橋・狩川研究室](https://www.takahashi.qse.tohoku.ac.jp "高橋・狩川研究室のホームページです")

また次のようにすることでリンクを使い回すことが可能です。

```md
[ここ][tk-link] と [この][tk-link] リンクは同じになります。
[tk-link] という書き方もできます。
　
[tk-link]: https://www.takahashi.qse.tohoku.ac.jp
```
**出力**
[ここ][tk-link] と [この][tk-link] リンクは同じになります。
[tk-link] という書き方もできます。

[tk-link]: https://www.takahashi.qse.tohoku.ac.jp

# 画像
画像も利用することが可能です。
画像は基本的には他のブログで使いまわすことがないので、整理の観点から`blog.md`と同一のディレクトリに格納してください。
```md
## タイトルありの画像を埋め込む
![代替テキスト](画像のパス "画像タイトル")

## タイトル無しの画像を埋め込む
![代替テキスト](画像のパス)
```
**出力**
![研究室ロゴ](public/Logo2020_black.png "研究室のロゴの画像です")
基本的には画像は要素いっぱいに拡大して表示されます。
サイズを指定したい場合にはHTMLを直接埋め込みます。

```html
<img style="width: 80px;" src="/Logo2020_black.png">
```
**出力**
<img style="width: 80px;" src="/Logo2020_black.png">

# 脚注
```md 書き方
文章中に`[^1]`のように記述し、脚注のリンク[^1]を作成することができます。数字ではなく文字列でも可能です。

[^1]: 上付き文字がここへのリンクとなります。
```
**結果**
文章中に`[^1]`のように記述し、脚注のリンク[^1]を作成することができます。数字ではなく文字列でも可能です。

[^1]: 上付き文字がここへのリンクとなります。

脚注は必ずしも文末にまとめて書く必要はありません。どこに書いてもブログ上では最末尾に表示されます。

# コード
ブログの文中にコードを埋め込むことができます。
## インラインコード
文章中にコードを表示するものです。強調と同じような使い方も可能です。
インラインにしたい部分を`` ` ``(バッククオート)で囲みます。
```md
`print("Hello, World!")`
```
**出力**
`print("Hello, World!")`

インラインコード内でバッククオートを利用したいときは、利用したいバッククオートとは異なる数の`` ` `` で囲います
```md
` `` ` や `` ` `` や ``` `` ``` など
```
**出力**
` `` ` や `` ` `` や ``` `` ``` など

## コードブロック
実はすでに上でいくつも登場していますが、コードプロックを挿入することも可能です。
~~~md
```
`や~を利用して囲むことでコードブロックを挿入できます。
```
~~~
**出力**
```
`や~を利用して囲むことでコードブロックを挿入できます。
```
### シンタックスハイライト
コードブロック内に記述している言語を指定することで、シンタックスハイライトを利用できます。
ただし現状なぜかインデントを反映することができません。コードを書く際にはしっかりインデントしましょう。
~~~
```c multiply.c
#include <stdio.h>

// 掛け算を行う関数
int multiply(int a, int b) {
    return a * b;
}

int main() {
    int num1, num2, result;

    // ユーザーから2つの整数を入力
    printf("Enter two integers: ");
    if (scanf("%d %d", &num1, &num2) != 2) {
        printf("Invalid input.\n");
        return 1; // エラーコードを返す
    }

    // 掛け算を行う関数を呼び出し
    result = multiply(num1, num2);

    // 結果を出力
    printf("The result of %d * %d is %d\n", num1, num2, result);

    return 0;
}
```
~~~
**出力**
```c multiply.c
#include <stdio.h>

// 掛け算を行う関数
int multiply(int a, int b) {
    return a * b;
}

int main() {
    int num1, num2, result;

    // ユーザーから2つの整数を入力
    printf("Enter two integers: ");
    if (scanf("%d %d", &num1, &num2) != 2) {
        printf("Invalid input.\n");
        return 1; // エラーコードを返す
    }

    // 掛け算を行う関数を呼び出し
    result = multiply(num1, num2);

    // 結果を出力
    printf("The result of %d * %d is %d\n", num1, num2, result);

    return 0;
}
```
### 編集差分の表示
言語を指定していた部分に`diff`と記述し、半角スペースをあげて言語を指定することで、編集差分の表示を行うことができます。
行の先頭に`+`, `-`を書きます。
~~~
```diff lang="javascript"
- const nextPageUrl = '../slide23.html';
+ const nextPageUrl = '../slide23/index.html';
```
~~~
**出力**
```diff js
- const nextPageUrl = '../slide23.html';
+ const nextPageUrl = '../slide23/index.html';
```

# 水平線
任意の位置に線を入れることができます。
```md
* * *
***
*****
- - -
--------------------------------------
```
**出力**
* * *
***
*****
- - -
--------------------------------------

# 表(テーブル)
ブログ中に表を挿入することができます。
また`:`を利用することで、左寄せ・中央・右寄せを指定できます。
```md
| 左寄せ              | 中央                   | 右寄せ                 |
|:-------------------|:---------------------:|----------------------:|
| Aviation Safety    | Cognitive bias        | Driving simulator     |
| Air Traffic Control| Risk taking propensity| Heart rate variability|
| Pilot              | Danger sensitivity    | Frustration           |
| Human Factors      | Social acceptance     | Machine learning      |
| Resilience         | Nuclear power         | Automatic operation   |
| Safety II          | Qualitative research  | AI                    |
```
| 左寄せ | 中央 | 右寄せ |
|:-|:-:|-:|
| Aviation Safety | Cognitive bias | Driving simulator |
| Air Traffic Control| Risk taking propensity| Heart rate variability|
| Pilot | Danger sensitivity | Frustration |
| Human Factors | Social acceptance | Machine learning |
| Resilience | Nuclear power | Automatic operation |
| Safety II | Qualitative research | AI |

ちなみに人間が見やすい以外のメリットはありませんが、このように見た目を揃えても出力には影響を与えません。
![Table Image](./table.png)

# こいつらいつ使うん埋め込み集
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
class="aspect-[16/9]" frameborder="0" title="map" 
marginheight="0" marginwidth="0" scrolling="no" 
src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2220.7717857620264!2d140.836551948494!3d38.25521785690698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x5f8a28567b9e0203%3A0x966a44e822756a66!2z6Z2S6JGJ5bGx!3m2!1d38.255548!2d140.83552559999998!4m5!1s0x5f8a28570c44e331%3A0x856877930a591764!2z57eP5ZCI56CU56m25qOf!3m2!1d38.2545539!2d140.8394304!5e0!3m2!1sja!2sjp!4v1701865600982!5m2!1sja!2sjp" 
width="100%" allowfullscreen="" oading="lazy" referrerpolicy="no-referrer-when-downgrade">
</iframe>
```
<iframe class="aspect-[16/9]" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2220.7717857620264!2d140.836551948494!3d38.25521785690698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x5f8a28567b9e0203%3A0x966a44e822756a66!2z6Z2S6JGJ5bGx!3m2!1d38.255548!2d140.83552559999998!4m5!1s0x5f8a28570c44e331%3A0x856877930a591764!2z57eP5ZCI56CU56m25qOf!3m2!1d38.2545539!2d140.8394304!5e0!3m2!1sja!2sjp!4v1701865600982!5m2!1sja!2sjp" width="100%" allowfullscreen="" oading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

## CodePen
```html
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="mdYPywN" data-pen-title="Untitled" data-user="Futty93" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Futty93/pen/mdYPywN">
  Untitled</a> by Futty93 (<a href="https://codepen.io/Futty93">@Futty93</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
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
<script id="asciicast-7592" src="https://asciinema.org/a/7592.js" async></script>
```
<script id="asciicast-7592" src="https://asciinema.org/a/7592.js" async></script>

## Figma
```html
<iframe class="aspect-[16/9]" style="border: 1px solid rgba(0, 0, 0, 0.1);" height="auto" width="100%"
src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File" allowfullscreen >
</iframe>
```
<iframe class="aspect-[16/9]" style="border: 1px solid rgba(0, 0, 0, 0.1);" height="auto" width="100%" src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File" allowfullscreen ></iframe>

## Speaker Deck
```html
<iframe 
class="speakerdeck-iframe" frameborder="0" 
src="https://speakerdeck.com/player/cd6be68a4e2145068d58808c51318a1a" 
title="使いにくいヒューマンインターフェースの館" allowfullscreen="true" 
style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 16 / 9;" data-ratio="1.7777777777777777">
</iframe>
```
<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/cd6be68a4e2145068d58808c51318a1a" title="使いにくいヒューマンインターフェースの館" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 16 / 9;" data-ratio="1.7777777777777777"></iframe>

## SlideShare
```html
<iframe class="aspect-[16/9]" src="//www.slideshare.net/slideshow/embed_code/key/B6SfqHFrWhihpr" 
width="100%" height="auto" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" loading="lazy" allowfullscreen>
</iframe> 
```
<iframe class="aspect-[6/5]" src="//www.slideshare.net/slideshow/embed_code/key/B6SfqHFrWhihpr" width="100%" height="auto" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" loading="lazy" allowfullscreen></iframe> 

## Google Slide
```html
<iframe 
class="aspect-[16/9]"
src="https://docs.google.com/presentation/d/e/2PACX-1vT6_5Wrpyx9_rwW2CR4EvwzSrpK1K-8wM9bPScv8KIbbIDVTUAEk7T2ZQQWtqDlhJyyHapESHmbFVTu/embed?start=false&loop=false&delayms=3000" 
frameborder="0" width="100%" height="auto" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>
```
<iframe class="aspect-[16/9]" src="https://docs.google.com/presentation/d/e/2PACX-1vT6_5Wrpyx9_rwW2CR4EvwzSrpK1K-8wM9bPScv8KIbbIDVTUAEk7T2ZQQWtqDlhJyyHapESHmbFVTu/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="auto" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Docswell
```html
<script 
async class="docswell-embed" src="https://www.docswell.com/assets/libs/docswell-embed/docswell-embed.min.js" 
data-src="https://www.docswell.com/slide/LK7J5V/embed" data-aspect="0.5625">
</script>
<div class="docswell-link">
  <a href="https://www.docswell.com/s/ku-suke/LK7J5V-hello-docswell">Docswell（ドクセル）はじめました by @ku-suke</a>
</div>
```
<script async class="docswell-embed" src="https://www.docswell.com/assets/libs/docswell-embed/docswell-embed.min.js" data-src="https://www.docswell.com/slide/LK7J5V/embed" data-aspect="0.5625"></script><div class="docswell-link"><a href="https://www.docswell.com/s/ku-suke/LK7J5V-hello-docswell">Docswell（ドクセル）はじめました by @ku-suke</a></div>

## Youtube
```html
<iframe 
class="h-full w-full aspect-[16/9]" 
src="https://www.youtube.com/embed/nue-bLFGKK8?si=f07CP0PP8KIReCMn" title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
```
<iframe class="h-full w-full aspect-[16/9]" src="https://www.youtube.com/embed/nue-bLFGKK8?si=f07CP0PP8KIReCMn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

