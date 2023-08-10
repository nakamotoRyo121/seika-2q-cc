# seika-2q-cc

## 制作したもの
”アフリカ・アジア現代文化研究センター(通称CAACCS)”のサイト(ファーストビューだけ)の模倣
  ※サイト↓
  [アフリカ・アジア現代文化研究センター](https://caaccs.kyoto-seika.ac.jp/)

## 使用したライブラリ
[Swiper](https://swiperjs.com/)
[GreenSock](https://greensock.com/)

## 概要
CAACCSのサイトにはスライドが使用されており、スライドの矢印を押すことでテキストと写真とかがアニメーションで変化してく。スライドの部分をSwiper、アニメーションの部分をGreenSockを使って、模倣した。

## 結果
スライドを押すことでテキストのアニメーションが動くようにJavaScriptを用いながら実装することがで、スライドも一定の時間が経つと変更するようにした。
だが、テキストのアニメーションはフェードインだけであり、フェードアウトまで実装できていない。スライドの画像に関してもフェードインとフェードアウトどちらのアニメーションも追加できておらず、時間経過によってズームするアニメーションも実装できていない。

## 改善点
* GSAPのTimelineの使い方をもう少し理解し、テキストと画像のアニメーションとがSwiperと連携して動作するようにする。（ちなみにつまずいた点は、フェードアウトのアニメーションをテキストに追加する部分。Swiperの矢印が押された場合にフェードインする設定になっている現状にフェードアウトも追加したい。なので、ボタンが押されてフェードアウトをした後にフェードインをするようにGSAPのTimelineを調整していたが、どうしてもフェードインが先に動作してからフェードアウトしてしまう。その解決方法が見つからなかった。）
* スライドの矢印の大きさが変更できなかったので調整する