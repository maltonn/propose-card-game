const permanent_card_lst = [
    "僕は", "君を", "僕と", "僕に", "僕の",
    "君は", "僕を", "君と", "君に", "君の",
]
const random_card_lst = [
    "一生一緒だよ", "抱きしめたい", "もう十分さ", "世界一", "求めるのさ", "のことで頭がいっぱいさ", "暮さないか？",
    "って不思議だね", "変かな？", "きっと大丈夫", "神様がいるなら", "こう言わせてくれ", "可愛い", "天使",
    "消しさってあげるよ", "失いたくないんだ", "最高", "叫んでる", "幸せな", "メロメロ", "胸", "ダメですか？",
    "おしとやかな", "触れると", "あの日見た", "女神", "ぶち壊して", "バージンロード", "耐えられないんだ",
    "真っ白なキャンバス", "苦しい時", "この星", "素敵", "味噌汁", "終わらない", "の雫", "ってなんだろう？",
    "どきどきする", "強がりな", "お嫁", "希望", "は確実に存在する", "パートナー", "みたいだね", "じゃじゃ馬な",
    "ロマンティック", "地獄", "守るよ", "逃がさない", "死んでも離さないよ", "のことずっと見てたよ",
    "が嫌だと言っても", "は誰にも渡さない", "一生面倒みるよ", "これ、なーんだ？", "のためなら死ねる",
    "いらないよね", "式をあげよう", "馬鹿だよね", "気づいていたよ", "何度言えばわかるんだい",
    "死ぬまで可愛がってあげるよ", "からは逃げられないのさ", "生きる意味", "は？", "逃さない", "不安の種",
    "むしろ嬉しいよ", "のことは何でも知ってるよ", "一生のお願いだ", "死ぬほど", "奪い去りたい", "クズ",
    "って言ったよね？", "楽しもうね", "ペット", "じゃダメかな？", "永遠に終わらない", "我慢できないんだ",
    "なんで", "シンプルに", "ピエロ", "になってほしいんだ", "口づけ", "ヤバい", "泥棒", "人間", "夫",
    "なんだから", "キュンキュン", "ギュッと抱きしめて", "ラブラブ", "籍、入れてみない？", "のことばかり考えてる",
    "タマらない", "恋人はもうやめにしよう", "するために生まれてきたんだ", "カリカリしないで", "一億年経っても",
    "体温を感じたい", "今ならはっきり言える", "セクシーな", "ハンパない", "ハニー", "の匂いが好きだよ",
    "小悪魔な", "それが僕の夢なんだ", "知ってるかい？", "クサいセリフ", "のカケラあつめて", "裸のままの",
    "ガチンコで", "トキメキ", "一発KOされちゃった", "を笑わせたいんだ", "じゃないとダメなんだ", "イカす",
    "プレイボーイ", "カラダ", "豚", "夜ごはん", "クチビル", "のサイン", "顔", "エンジェル", "と呼んでくれないか",
    "お母さん", "花嫁", "マン", "圧倒的", "イクメン", "オナラ", "フィアンセ"

    , "フォー"
]

const random_card = random_card_lst.sort(() => Math.random() - 0.5).slice(0, 8)

const card_lst = permanent_card_lst.concat(random_card).concat(["<空白>", "<空白>"])

for (i = 0; i < card_lst.length; i++) {
    div = document.createElement("div")
    div.className = "card"
    div.innerHTML = card_lst[i]
    document.getElementById("card_container").appendChild(div)
    div.addEventListener("click", function () {
        if (!this.classList.contains("selected")) {
            this.classList.add("selected")
            div_copy = this.cloneNode(true)

            if (div_copy.innerText=="<空白>") {
                console.log("空白")
                div_copy.innerHTML = ""
            }
            document.getElementById("selected_card_container").appendChild(div_copy)

        } else {
            this.classList.remove("selected")
            already_selected_card = document.getElementById("selected_card_container").querySelectorAll(".card")
            for (j = 0; j < already_selected_card.length; j++) {
                if (already_selected_card[j].innerText == this.innerText) {
                    already_selected_card[j].remove()
                    break
                } if (already_selected_card[j].innerText == "" && this.innerText == "<空白>") {
                    already_selected_card[j].remove()
                    break
                }
            }
        }
    })
}