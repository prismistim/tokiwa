# Tokiwa

> iidx option viewer https://tokiwa.netlify.com

![](./static/twitter.png)

## About "tokiwa"

tokiwaはbeatmania IIDXの使用オプションを記録・閲覧するためのWebアプリです。beatmania IIDXでは、各曲で使用したオプションは保存されず、最後にプレーした際に使用したオプション設定が引き継がれます。いい部分もある反面、曲に対して自分の最適なオプションが分からなくなった、忘れてしまった時があるかもしれません。そこでオプションを保存・閲覧できるようにしたのがこのtokiwaです。

## Functions

tokiwaは現在α版のため、DPプレイヤーであるMAJORさんの☆12譜面の使用オプションのデータを用いて開発を行っています。現在、他のユーザーのデータを作成することはできませんが、今後の展開でサービス化するかもしれません。今後実装したい機能としては以下の通りです。

- 使用オプションの編集機能
  - localStrageを使用して編集機能を作成しようと検討しています。DBの管理とかは面倒なので端末側で処理してもらう感じで。
- 厳密な検索機能
- 他難易度の実装
- csvからのスコア入力対応
  - いずれ作りたい音ゲーマー向けポートフォリオサービスに統合する際に検討したいです。

なおこのサイトはPWA化しています。お使いの端末のホーム画面に追加できたり、起動するとURLバーが隠された状態で起動するなど、アプリ的な使用が可能です。

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Licence
MIT
