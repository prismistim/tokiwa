<template lang="pug">
  .container
    article
      section
        h2.section-title About "tokiwa"
        p.description tokiwaはbeatmania IIDXの使用オプションを記録・閲覧するためのWebアプリです。
          | beatmania IIDXでは、各曲で使用したオプションは保存されず、最後にプレーした際に
          | 使用したオプション設定が引き継がれます。いい部分もある反面、曲に対して自分の最適なオプション
          | が分からなくなった、忘れてしまった時があるかもしれません。そこでオプションを保存・閲覧できるように
          | したのがこのtokiwaです。
      section
        h2.section-title Functions
        p.description tokiwaは現在β版のため、DPプレイヤーであるMAJORさんの☆12譜面の使用オプションのデータを用いて開発を行っています。
          | 現在、他のユーザーのデータを作成することはできませんが、今後の展開でサービス化するかもしれません。今後実装したい機能
          | としては以下の通りです。
        ul.default-list
          li 使用オプションの編集機能
          li 厳密な検索機能
          li 他難易度の実装
          li csvからのスコア入力対応
        p.description なおこのサイトはPWA化しています。お使いの端末のホーム画面に追加できたり、起動するとURLバーが隠された状態で
          | 起動するなど、アプリ的な使用が可能です。
      nuxt-link(to="/")  > TOP
</template>

<script>
export default {
  layout: 'default'
}
</script>