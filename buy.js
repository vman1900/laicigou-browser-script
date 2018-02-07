/**
 * Dubiously created by Adrian Cooney
 * http://dunxrion.github.io
 */(function(e){"use strict";function n(e,t){return{string:"+",style:"font-size: 1px; padding: "+Math.floor(t/2)+"px "+Math.floor(e/2)+"px; line-height: "+t+"px;"}}function r(e,t,n,r,o){n=n.toUpperCase();if(n.length<24){var u=Math.max(0,n.length-12),a=70+u*-3;i(e,a,n,r/2,o)}else if(n.length<29)i(e,40,n,r/2,o);else{var f=s(n,27);f.forEach(function(n,s){i(e,40,n,r/2,t=="lower"?o-(f.length-1)*40+s*40:o+s*40)})}}function i(e,t,n,r,i){e.font="bold "+t+"px Impact";e.fillStyle="#fff";e.textAlign="center";e.textBaseline="middle";e.lineWidth=7;e.strokeStyle="#000";e.strokeText(n,r,i);e.fillText(n,r,i)}function s(e,t){var n=[],r=e.split(" "),i=[];for(var s=0,o=r.length;s<o;s++)if((i+r[s]).length<t)i.push(r[s]);else{n.push(i.join(" "));i.length=0;i.push(r[s])}n.push(i.join(" "));return n}var t={"10 Guy":"//i.imgur.com/LaENqOV.jpg","3rd World Success Kid":"//i.imgur.com/WA5duA1.jpg","90's Problems":"//i.imgur.com/tL47qtp.jpg","Aaand It's Gone":"//i.imgur.com/yf12saq.jpg","Actual Advice Mallard":"//i.imgur.com/WymFmVy.jpg","Advice Dog":"//i.imgur.com/Qk0VO6D.jpg","Advice God":"//i.imgur.com/xH2fSFg.jpg","Almost Politically Correct Redneck":"//i.imgur.com/YqLgINf.jpg","Am I The Only One":"//i.imgur.com/gS9YL5U.jpg","Ancient Aliens":"//i.imgur.com/NfCknz0.jpg","Annoyed Picard":"//i.imgur.com/s9GmfSS.jpg","Annoying Childhood Friend":"//i.imgur.com/27VCyQw.jpg","Annoying Facebook Girl":"//i.imgur.com/ccczyGt.jpg","Anti-Joke Chicken (Rooster)":"//i.imgur.com/KOsW0jh.jpg","Awkward Penguin":"//i.imgur.com/ez1tQrq.jpg","Back In My Day Grandpa":"//i.imgur.com/zuJSZp8.jpg","Bad Advice Mallard":"//i.imgur.com/QEPvL2B.jpg","Bad Luck Brian":"//i.imgur.com/sRW8BiO.jpg","Bear Grylls":"//i.imgur.com/6Spqy1D.jpg","Brace Yourself":"//i.imgur.com/NhIq0LY.jpg","Captain Obvious":"//i.imgur.com/DmUcxBu.jpg","Chemistry Cat":"//i.imgur.com/8agP4Xe.jpg","College Freshman":"//i.imgur.com/2Ynyv9t.jpg","College Liberal":"//i.imgur.com/OWfvSFE.jpg","Condescending Wonka":"//i.imgur.com/D0e5fgL.jpg","Confession Bear":"//i.imgur.com/kH1SKhp.jpg","Confession Kid":"//i.imgur.com/jhOxR12.jpg","Confused Gandalf":"//i.imgur.com/iIb5SEo.jpg","Conspiracy Keanu":"//i.imgur.com/pFyk3J7.jpg","Courage Wolf":"//i.imgur.com/H5qoXFb.jpg","Dating Site Murderer":"//i.imgur.com/jffNNql.jpg","Depression Dog":"//i.imgur.com/wgad6P8.jpg","Drunk Baby":"//i.imgur.com/QvZdbRE.jpg","English Motherfucker":"//i.imgur.com/sJThEC0.jpg","Evil Plotting Raccoon":"//i.imgur.com/xMslWFf.jpg","First Day On The Internet Kid":"//i.imgur.com/TWfdmVu.jpg","First World Cat Problems":"//i.imgur.com/0vR5Slq.jpg","First World Problem":"//i.imgur.com/ATcIl08.jpg","Forever Alone":"//i.imgur.com/pcfXSUU.jpg","Forever Resentful Mother":"//i.imgur.com/pIrdwo2.jpg","Foul Bachelor Frog":"//i.imgur.com/JUFmusm.jpg","Foul Bachelorette Frog":"//i.imgur.com/dYf971U.jpg","Friendzone Fiona":"//i.imgur.com/Qu1eedL.jpg","Frustrated Farnsworth":"//i.imgur.com/U3SElKP.jpg","Fuck Me, Right?":"//i.imgur.com/J9gfxsx.jpg","Gangster Baby":"//i.imgur.com/C3XhI56.jpg","Good Girl Gina":"//i.imgur.com/qK6lYr2.jpg","Good Guy Greg":"//i.imgur.com/UXMPoKN.jpg","Grandma Finds The Internet":"//i.imgur.com/xPfGYqu.jpg","Grinds My Gears":"//i.imgur.com/t4JqU1j.jpg","Grumpy Cat (Tard)":"//i.imgur.com/dU5CDxN.jpg","High Expectations Asian Father":"//i.imgur.com/7QeB9LI.jpg","Hipster Barista":"//i.imgur.com/AbWxdy2.jpg","Horrifying House Guest":"//i.imgur.com/DxmoFp1.jpg","I Dare You Samuel Jackson":"//i.imgur.com/UQtpdqj.jpg","I Should Buy A Boat":"//i.imgur.com/XqlqPxn.jpg","I Too Like To Live Dangerously":"//i.imgur.com/qF70EL9.jpg","Idiot Nerd Girl":"//i.imgur.com/8hYPYwd.jpg","Insanity Wolf":"//i.imgur.com/GOOdg3k.jpg","Joker Mind Loss":"//i.imgur.com/qQIRaOD.jpg","Joseph Ducreux":"//i.imgur.com/QL7TyR9.jpg","Lame Joke Eel":"//i.imgur.com/oQXw3jF.jpg","Lame Pun Raccoon":"//i.imgur.com/nvALRK3.jpg","Lazy College Senior":"//i.imgur.com/PpkVfzz.jpg","Mad Karma":"//i.imgur.com/G0QMPum.jpg","Masturbating Spidey":"//i.imgur.com/dZ7AB4c.jpg","Matrix Morpheus":"//i.imgur.com/8Yrw6cZ.jpg","Mayonnaise Patrick":"//i.imgur.com/5jE0Y7f.jpg","Musically Oblivious 8th Grader":"//i.imgur.com/l5YHN5D.jpg","Not Sure Fry":"//i.imgur.com/7rFgBB1.jpg","Oblivious Suburban Mom":"//i.imgur.com/Y7o7UJs.jpg","One Does Not Simply":"//i.imgur.com/7LrwR1Y.jpg","Overly Attached Girlfriend":"//i.imgur.com/5blLJLR.jpg","Overly Manly Man":"//i.imgur.com/dOSn9Na.jpg","Paranoid Parrot":"//i.imgur.com/KooYHdg.jpg",Pedobear:"//i.imgur.com/c6JZKRW.jpg","Pepperidge Farm Remembers":"//i.imgur.com/uFde4v5.jpg",Philosoraptor:"//i.imgur.com/eERhI5h.jpg","Priority Peter":"//i.imgur.com/BBEFk0e.jpg","Rasta Science Teacher":"//i.imgur.com/Js6Ai5T.jpg","Redditor's Wife":"//i.imgur.com/d1XfJeD.jpg","Revenge Band Kid":"//i.imgur.com/dlvmaRI.jpg","Schrute Facts":"//i.imgur.com/UxcvPwT.jpg","Scumbag Brain":"//i.imgur.com/OZhhZdS.jpg","Scumbag Stacy":"//i.imgur.com/Qqz1axp.jpg","Scumbag Steve":"//i.imgur.com/Rfvoc0Y.jpg","Sexually Oblivious Rhino":"//i.imgur.com/RoaNuEC.jpg","Sheltering Suburban Mom":"//i.imgur.com/vMkSofv.jpg","Shut Up And Take My Money":"//i.imgur.com/uWe0rtQ.jpg","Skeptical Third World Kid":"//i.imgur.com/uwAusxV.jpg","Smug Spongebob":"//i.imgur.com/OTTRjrv.jpg","Socially Awesome Penguin":"//i.imgur.com/S6WgQW7.jpg","Success Kid":"//i.imgur.com/ZibijBz.jpg","Successful Black Man":"//i.imgur.com/ogIm0cy.jpg","Sudden Clarity Clarence":"//i.imgur.com/N3Xmfbe.jpg","Tech Impaired Duck":"//i.imgur.com/riz28ci.jpg","The Most Interesting Man In The World":"//i.imgur.com/MGv15MH.jpg","The Rent Is Too High":"//i.imgur.com/r5WLktQ.jpg","Tough Spongebob":"//i.imgur.com/2w0F1HX.jpg","Unhelpful Highschool Teacher":"//i.imgur.com/ohbGhuD.jpg","Vengeance Dad":"//i.imgur.com/0nUStsa.jpg","What Year Is It?":"//i.imgur.com/fj79hQS.jpg","X, X Everywhere":"//i.imgur.com/GGy94Gt.jpg","Yeah That'd Be Great":"//i.imgur.com/nz9M2pl.jpg","Yo Dawg Xzibit":"//i.imgur.com/XOyGqF2.jpg","You're Bad And You Should Feel Bad":"//i.imgur.com/YsabGnQ.jpg","You're Gonna Have A Bad Time":"//i.imgur.com/2tNR7P7.jpg"};e.meme=function(n,i,s,o,u){n||e.error("Yo, you forgot the text for the upper part of the meme. The bit at the top. Yeah, that bit.");i||e.error("You forgot the text for the bottom of the meme, stupid.");s||e.error("Dude, you forgot the meme type or url for the background image (CORS enabled, *hint* imgur *hint*). To see a list of supported memes, hit `console.meme()`");if(!n&&!i&&!s)return e.log("> "+Object.keys(t).join("\n> "));var a=document.createElement("canvas"),f=a.getContext("2d"),o=o||500,u=o||500,l=500,c=500,h=new Image;h.setAttribute("crossOrigin","anonymous");h.onload=function(){a.width=o;a.height=u;var t=n.toUpperCase();f.scale(o/500,u/500);f.drawImage(this,0,0,l,c);r(f,"upper",n,l,50);r(f,"lower",i,l,c-50);e.image(a.toDataURL())};if(t[s])var p=t[s];else var p=s;h.src=p};e.image=function(t,r){r=r||1;var i=new Image;i.onload=function(){var i=n(this.width*r,this.height*r);e.log("%c"+i.string,i.style+"background: url("+t+"); color: transparent;")};i.src=t;i.style.background="url("+t+")"}})(console);

/*
let script = document.createElement('script')
script.type = 'text/javascript'
script.src = 'https://cdn.rawgit.com/adriancooney/console.image/master/console.image.min.js'
document.head.appendChild(script)
*/

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://unpkg.com/axios/dist/axios.min.js';
document.head.appendChild(script);

async function sleep (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

const rareDegrees = ['普通', '稀有', '卓越', '史诗', '神话', '传说']

const captchas = []

let average = null

async function selectAndBuyPet (threshold = 40) {
  const pets = await axios.post('https://pet-chain.baidu.com/data/market/queryPetsOnSale', {
    "pageNo": 1,
    "pageSize": 10,
    "querySortType": "AMOUNT_ASC",
    "petIds": [],
    "lastAmount": null,
    "lastRareDegree": null,
    "requestId": Date.now(),
    "appId": 1,
    "tpl": ""
  }).then(r => {
    const pets = r.data.data.petsOnSale;
    average = pets.reduce((t, p) => t + (+p.amount), 0) / pets.length;
    console.log('首页均价:', average)
    const result = []
    for (const pet of pets) {
      if (+pet.amount < average - threshold) {
        // console.log(pet.petId, rareDegrees[pet.rareDegree], pet.amount + '微')
        result.push(pet)

        if (pet.rareDegree > 0) return [pet] // 普通以上级别，一定抢
        if (+pet.amount < 1000) return [pet] // 低于成本价1000，一定抢
      }
    }
    return result
  })

  if (!pets.length) return
  const pet = pets[pets.length-1]
  if (!canBuy) {
    console.log('找到可购买目标，但正在等待上笔购买完成')
    return
  }
  if (Date.now() - lastBuy < 5000) {
    console.log('找到可购买目标，但正在等待上笔购买完成')
    return
  }

  let captcha, seed
  while (true) {
    const c = captchas.shift()
    if (!c) {
      console.log('没有验证码了，请继续识别')
      return
    }
    if (Date.now() - c.at < 20 * 60 * 1000) {
      captcha = c.captcha
      seed = c.seed
      break
    }
  }

  await axios.post('https://pet-chain.baidu.com/data/txn/create', {
    amount: pet.amount,
    captcha: captcha,
    seed: seed,
    petId: pet.petId,
    requestId: Date.now(),
    appId: 1,
    tpl: "",
    validCode: pet.validCode
  }).then(r => {
    const msg = r.data
    if (!msg) {
      console.log('没有响应，购买失败')
    } else if (!+msg.errorNo) {
      console.log('购买成功:', pet.petId, rareDegrees[pet.rareDegree], pet.amount + '微')
      lastBuy = Date.now()
    } else {
      console.log('购买失败:', msg.errorNo, msg.errorMsg)
    }
  })

  await sleep(1000)
}

async function recognizeCaptcha () {
  const seed = await axios.post('https://pet-chain.baidu.com/data/captcha/gen', {
    "requestId": Date.now(),
    "appId": 1,
    "tpl": ""
  }).then(r => {
    const {img, seed} = r.data.data
    console.image('data:image/jpeg;base64,' + img)
    return seed
  })
  await sleep(100)
  const captcha = window.prompt('输入图片中验证码（若不输入，则放弃此验证码）')

  if (captcha === 'stop') stopCaptcha()
  else if (captcha === 'skip') return

  captchas.push({
    captcha,
    seed,
    at: Date.now()
  })
}

let canSell, canBuy
let lastBuy = Date.now()

async function handleMyPets (threshold=20) {
  await axios.post('https://pet-chain.baidu.com/data/user/order/list', {
    appId: 1,
    pageNo: 1,
    pageSize: 10,
    pageTotal: -1,
    requestId: Date.now(),
    tpl: ""
  }).then(r => {
    const data = r.data.data.dataList.filter(item => item.txnStatus === 1)
    canSell = data.filter(item => item.status === 1).length <= 1
    canBuy = data.filter(item => item.status === 2).length === 0
  })

  if (!canSell) return

  await sleep(2000)
  const pets = await axios.post('https://pet-chain.baidu.com/data/user/pet/list', {
    "pageNo": 1,
    "pageSize": 10,
    "pageTotal": -1,
    "requestId": Date.now(),
    "appId": 1,
    "tpl": ""
  }).then(r => {
    return r.data.data.dataList.filter(item => item.shelfStatus === 0 && item.rareDegree === 0)
  })

  for (const pet of pets) {
    while (true) {
      await sleep(2000)
      if (average !== null) break
    }
    const amount = (average - threshold) + ''
    await axios.post('https://pet-chain.baidu.com/data/market/salePet', {
      amount: amount,
      appId: 1,
      petId: pet.petId,
      requestId: Date.now(),
      tpl: ""
    }).then(r => {
      const msg = r.data
      if (!msg) {
        console.log('没有响应，卖出失败')
      } else if (!+msg.errorNo) {
        console.log('卖出成功:', pet.petId, rareDegrees[pet.rareDegree], amount + '微')
      } else {
        console.log('卖出失败:', msg.errorNo, msg.errorMsg)
      }
    })
  }
}

let runCaptcha, runBuy, runSell

function stopCaptcha () {
  clearInterval(runCaptcha)
}

function stopBuy () {
  clearInterval(runBuy)
}

function stopSell () {
  clearInterval(runSell)
}

function startCaptcha () {
  runCaptcha = setInterval(() => {
    recognizeCaptcha()
  }, 2000)
}

function startBuy () {
  setTimeout(() => {
    runBuy = setInterval(() => {
      selectAndBuyPet()
    }, 2000)
  }, 10000)
}

function startSell () {
  runSell = setInterval(() => {
    handleMyPets()
  }, 5000)
}

function start () {
  // if (Date.now() > 1518042131778) return
  startCaptcha()
  startBuy()
  startSell()
}

function stop () {
  stopSell()
  stopBuy()
  stopCaptcha()
}

start()
