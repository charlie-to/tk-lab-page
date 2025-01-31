---
title: 'Gitを使って、HPを更新してみよう'
date: '2024-12-31'
tag: ['dev', '引き継ぎ']
lead: '研究室HPの更新方法を紹介'
---

> [!CUSTOM] green report 作成中
> この記事は作成中です。研究室HPの更新方法を予定しています。

> [!CUSTOM] blue copilot はじめに
> 高橋・狩川研究室のホームページのソースコードはGitHubで管理されています。 自分のパソコンでソースコードを更新して、GitHubに反映する方法を説明します。 また、高橋狩川研究室のホームページ更新ではGitKrakenの利用を推奨しています。 このブログではGitKrakenを利用した方法を説明しますが、他の方法でGithubへ反映する方法を利用しても大丈夫です。

> [!NOTE]
> 高橋・狩川研究室のホームページのソースコードはGitHubで管理されています。
> 自分のパソコンでソースコードを更新して、GitHubに反映する方法を説明します。
> また、高橋狩川研究室のホームページ更新ではGitKrakenの利用を推奨しています。
> このブログではGitKrakenを利用した方法を説明しますが、他の方法でGithubへ反映する方法を利用しても大丈夫です。

# GitKrakenのインストール
1. [GitKraken公式サイト](https://www.gitkraken.com/)にアクセスします。
2. ダウンロードページから、自分のOS（Windows、Mac、Linux）に合ったインストーラーをダウンロードします。
3. インストールウィザードに従ってインストールを完了させます。
- インストール中にアカウント登録を求められる場合があります。GoogleアカウントやGitHubアカウントを使って登録すると簡単です。

---

# GitHubアカウントの作成
もしGitHubアカウントを持っていない場合は、以下の手順で作成してください。
1. [GitHub公式サイト](https://github.com/)にアクセスします。
2. 「Sign up」ボタンをクリックし、必要な情報（メールアドレス、パスワードなど）を入力してアカウントを作成します。

---

# 大元のリポジトリをフォーク
ホームページ管理係が管理している大元となるリポジトリを自分のGithubにフォーク(コピーを作成)します。
1. 大元のリポジトリをブラウザで開きます。(URL等はホームページ管理係に確認してください)
2. 画面右上部にあるForkをクリックします。
   ![Github Fork](./img-git-flow/Github-fork.png)
3. Create先のOwnerとして自分のアカウントを選択してください。
4. Create forkをクリックし、自分のリポジトリに`tk-lab-page`が追加されたことを確認してください。

---

# リポジトリのクローン
GitKrakenを使って研究室のホームページのソースコードを取得（クローン）します。
1. GitKrakenを起動します。
2. 左側のメニューから「Clone a Repo」を選択します。
   ![Clone a Repo](./img-git-flow/GitKrakenTop.png)
3. 「Where to clone to」 に自分のパソコン内の保存したい場所を入力してください。
4. 「Repository URL」に、先ほど作成した`自分のGitHubリポジトリURL`を入力します。
- 例: `https://github.com/username/tk-lab-page.git`
  ![Inpput Repo's info](./img-git-flow/Clone-a-Repo.png)
5. **`Create the repo!`** をクリック。
- 左下にローディングが表示されるので、終わるまで待ちます。
  ![Now loading](./img-git-flow/now-loading.png)
6. クローンが完了したら、Open Nowをクリックします。Git KrakenにGRAPHが表示されたら完了です。
   ![Open Now](./img-git-flow/open-now.png)
   ![Git Kraken Graph](./img-git-flow/GitKrakenGraph.png)

---

# GPGキーの設定
GitHubでは、セキュリティを向上させるためにGPGキーを利用することが推奨されています。ホームページ管理係でもGPGキーの登録を推奨しています。
本ブログではGitKrakenを利用してGPGキーを生成する方法を紹介します。自分でGPGキーを生成する場合には[GitHubのGPGキーガイド](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)に従って、GPGキーを生成し、GitKrakenにGPGキーを追加してください。
## GPGキーの生成
1. GitKrakenの右上の歯車マークから設定(Preferences)を開き、左のリストから `Comit Signing` を選択します。
4. 「GPG Format」は`OPENPGP`を選択し、「GPG Program」には`gpg`と表示されていることを確認してください。表示されない場合には入力してください。
5. 「Signing Key」はすでにGPGキーを生成している場合に選択する部分です。今回は新たに生成するため、`None`のまま進めます。
6. **`Generate`** をクリックすると新たなGPGキーが生成されます。生成されると「Signing Key」に自動的に生成されたキーが選択されます。
   ![Generate GPG Key](./img-git-flow/GenerateGPG.png)
## GithubへGPGキーの登録
1. 自身のパソコンのコマンドラインを立ち上げてください。MacOSであれば標準で`Terminal`が用意されています。
2. 次のテキストを入力してください。
  ```Shell
  gpg --list-secret-keys --keyid-format=long
  ```
エンターキーを押すと次のような表示が出ることを確認してください。
  ```Shell
  $ gpg --list-secret-keys --keyid-format=long
  /Users/hubot/.gnupg/pubring.kbx
  ------------------------------------
  sec   rsa4096/3AA5C34371567BD2 2025-01-09 [SC] [expires: 2027-01-09]
  uid                          [ultimate] Futty93 <yamada.taro.b8@dc.tohoku.ac.jp>
  ssb   rsa4096/4BB6D45482678BE3 2025-01-09 [SEA] [expires: 2027-01-09]
  ```
作成したGPGキーのリストが表示されるため、複数のGPGキーが存在する場合には、GitKrakenで生成したものを選択し、GPGキーIDをコピーします。
この例ではGPGキーIDは`3AA5C34371567BD2`です。
3. 次のテキストを入力してください。ただし`3AA5C34371567BD2`は自分のものに変更してください。
  ```Shell
  gpg --armor --export 3AA5C34371567BD2
  ```
エンターキーを押すと次のような長い文字列が表示されます。
  ```Shell
  -----BEGIN PGP PUBLIC KEY BLOCK-----
  
  navlauihvangnvae;vasdkjvna;kvbKKDFNK+VDSKHKGNVjvnglghva;unvNv
  agvaer/gaLGVMEg/,abJEgve/gambael;zugajrgaeorgma?avaierab/sghh
  Qr2948qtb+KGagnoaer
  =jFro
  -----END PGP PUBLIC KEY BLOCK-----
  ```
出力されたテキストを`-----BEGIN PGP PUBLIC KEY BLOCK-----`から`-----END PGP PUBLIC KEY BLOCK-----`を含んですべてコピーしてください。
4. Githubで右上の自分のアイコンをクリックし`Settings`を選択します。
5. 左側のリストから`SSH and GPG keys`を開いてください。
6. 「GPG Keys」の`New GPG key`をクリックし、「Title」は任意のものを入力し、「Key」には先ほどコピーしたテキストをペーストし、`Add GPG key`をクリックします。
7. 一覧に追加したGPGキーが表示されていれば完了です。

---

# ブランチの作成
ホームページの変更作業を安全に行うために、新しいブランチを作成します。
1. GitKrakenの左側にある「Branch」アイコンをクリックします。
2. 「Create Branch」を選択し、ブランチ名を入力します。
- 例: `feature/update-homepage`や`add-june-blog`.
3. 作成したブランチが選択された状態になっていることを確認します。

---

# ソースコードの編集とコミット
1. クローンしたローカルフォルダ内で、必要な変更を行います。
2. GitKrakenに戻り、変更が「Unstaged Changes」として表示されていることを確認します。
3. 必要なファイルを選択し、「Stage Changes」をクリックします。
4. 下部にあるメッセージ入力欄に、変更内容を記載して「Commit Changes」をクリックします。
- 例: `Update navigation menu`や`Fix broken link on homepage`.

---

# プルリクエストの作成
1. GitKrakenの画面右上にある「Pull Request」をクリックします。
2. 「Open Pull Request」を選択し、変更内容を記載します。
3. 「Submit Pull Request」をクリックして、リポジトリの管理者にレビューを依頼します。

---

# プルリクエストのマージ
リポジトリ管理者がプルリクエストを確認し、問題がなければマージします。
1. GitHubのリポジトリページにアクセスします。
2. プルリクエストのタブを開き、該当するプルリクエストを選択します。
3. 「Merge Pull Request」ボタンをクリックして変更を反映します。

---

# ローカルリポジトリの更新
リモートリポジトリに変更が加わった場合、ローカルリポジトリを最新状態に更新します。
1. GitKrakenで、左上の「Pull」ボタンをクリックします。
2. 最新の状態が反映されることを確認します。

---




