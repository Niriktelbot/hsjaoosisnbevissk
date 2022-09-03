const ADMINS = [5198364323] 
const DB_URL = 'mongodb://c52584_vadimmafiainvest_com:LiRmoQencutof61@mongo1.c52584.h2,mongo2.c52584.h2,mongo3.c52584.h2/c52584_vadimmafiainvest_com?replicaSet=MongoReplica'
const QIWI_TOKEN = "78ee5305ed7454be89f81d4975fc801b"
const BOT_TOKEN = "5731176224:AAH3KhsJJioZeF7M7jy2_lttRTL0whehpqI" 

var txnId = require('./txnId');   
var config = {
	payeer: {
		enabled: true,
		account: "P1062687461", 
	  apiId: 1731949089, 
	  apiPass: "eUPpKHVV8oDGNOkO"
	}
} 

process.env.TZ = 'Moscow/Europe';
let trees = [
	{
		id: 0,
		name: "iPhone 1",
		earn: 13,
		price: 10,
	},
	{
		id: 1,
		name: "iPhone 2",
		earn: 25,
		price: 20,
	},
	{
		id: 2,
		name: "iPhone 3",
		earn: 57,
		price: 50,
	},
	{
		id: 3,
		name: "iPhone 4",
		earn: 109,
		price: 100,
	},
	{
		id: 4,
		name: "iPhone 5",
		earn: 200,
		price: 190,
	},
	{
		id: 5,
		name: "iPhone 6",
		earn: 315,
		price: 300,
	},
	{
		id: 6,
		name: "iPhone 7",
		earn: 625,
		price: 600,
	},
	{
		id: 7,
		name: "iPhone 8",
		earn: 935,
		price: 900,
	},
	{
		id: 8,
		name: "iPhone 9",
		earn: 1470,
		price: 1400,
	},
];


const mongo = require('mongoose');
mongo.connect(DB_URL);


var User = mongo.model('User', {
	id: Number,
	buybalance: Number,
	outbalance: Number,
	outhbalance: Number,
	name: String,
	bhivebalance: Number,
	accumulation_balance: Number,
	deposit_balance: Number,
	fc: Number,
	ref: Number,
	regDate: String,
	trees: Array,
	deposit: Number,
	payout: Number,
	fetuses: Number,
	menu: String,
	lastCollect: Number,
	ban: Boolean,
	refCount: Number,
	wb_profits: Number,
	clanName: String,
	totalEarn: Number,
	not: Boolean,
	prize: Boolean,
	spinsToday: Number,
	data: String,
	bank: Number,
	game_balance: Number,
	game_balance: Number,
	game_payin: Number,
	game_payout: Number,
	game_limit: Number,
	game_bet: Number,
});

var wbProfits = [0, 33, 340, 618, 982, 2200, 4978, 7470, 23027] // доход
var wbPrices = [0, 0, 120, 400, 500, 2000, 3000, 4000, 7000] // цена

var Task = mongo.model('Task', {
	id: Number
});

const Clan = mongo.model('Clan', {
	name: String,
	maxMembers: Number,
	members: Number,
	balance: Number,
	creator_id: Number,
	creator_name: String,
	zam_id: Number,
	zam_name: String,
	total_earn: Number,
	level: Number,
	bal: Number
})

const Ticket = mongo.model('Ticket', {
	id: Number,
	amount: Number,
	wallet: String
})

const BeeMother = mongo.model("BeeMothr", {
	creator_id: Number,
	end_time: Number,
	beesGet: Number,
	nextBeeGet: Number
})

const WildBee = mongo.model("WildBee", {
	creator_id: Number,
	start_time: Number,
	level: Number,
	bee_profit: Number,
})

const Tamagochi = mongo.model("Tamagochi", {
	creator_id: Number,
	start_time: Number,
	cost: Number,
	status: Boolean,
	sick: Boolean,
	sickTime: Number,
	lastFeed: Number,
	lastClean: Number,
})

const Voucher = mongo.model("Voucher", { id: String, tree_id: Number })
function generateID(res) { var text = ""; var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; for (var i = 0; i < res; i++)text += possible.charAt(Math.floor(Math.random() * possible.length)); return text }

const Start = [
	["🔰 Персонажи", "🎲 Игры", "♻️ Обмен"],
	["🖥 Личный кабинет", "👥 Партнёры"],
	["👑 Банда", "🎲 Тамагочи", "📚 О боте"],
	["🔑 Клады"]
];

const Sekret = [
	["💼 Инвестиции", "👔 Партнёрам"],
    ["💳 Кошелёк"],
	["⚙️ Настройки", "🗓 Обучение"]
];

const Klad = [
	["🤫 Клад", "💣", "💣"],
	["💣", "💣", "💣"],
	["💣", "💣", "💣"],
	["📋 Назад"]
];

const Cancel = [
	["🚫 Отмена"]
];

const AdminPanel = [
	["📬 Рассылка", "📮 Выплаты"],
	["📧 Информация"],
	["🔙 Назад"]
];

const RM_admin = {
	inline_keyboard: [
	    [{ text: "🔥 Создать промокод", callback_data: "a_voucherpromo" }, { text: "✉️ Рассылка", callback_data: "admin_mm" }],
		[{ text: "🔎 Управление пользователем", callback_data: "admin_u" }, { text: "📮 Выплаты", callback_data: "admin_w" }],
		[{ text: "🗒 Чек", callback_data: "a_voucher" }, { text: "✏️ Лимит количества Персонажев", callback_data: "admin_limit" }],
		[{ text: "✏️ Бонус к пополнению", callback_data: "admin_b" }, { text: "♻️ Бонус к реинвесту", callback_data: "admin_br" }],
	    [{ text: "🕒 Топ за 24 часа", callback_data: "admin_top" }],
	]
}

const RM_admin_return = { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_return" }],] }

const RM_promo = {
	inline_keyboard: [
	[{ text: "💸 Для покупок", callback_data: "voucherbuy" }],
	[{ text: "💳 Для вывода", callback_data: "voucherout" }],
	]
}

const Promo = mongo.model("Promo", { id: String, sum: Number, activated: Boolean })
function generateID(res) { var text = ""; var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; for (var i = 0; i < res; i++)text += possible.charAt(Math.floor(Math.random() * possible.length)); return text } 

const RM_mm1 = {
	inline_keyboard: [
		[{ text: "⏹ Стоп", callback_data: "admin_mm_stop" }],
		[{ text: "⏸ Пауза", callback_data: "admin_mm_pause" }],
	]
}

const RM_mm2 = {
	inline_keyboard: [
		[{ text: "⏹ Стоп", callback_data: "admin_mm_stop" }],
		[{ text: "▶️ Продолжить", callback_data: "admin_mm_play" }],
	]
}



const { Qiwi } = require('node-qiwi-api');
const qiwi = new Qiwi(QIWI_TOKEN);

const Telegram = require('node-telegram-bot-api');
const bot = new Telegram(BOT_TOKEN, { polling: true });

bot.getMe().then(r => console.log(r))

bot.on('text', async (message) => {
	message.send = (text, params) => bot.sendMessage(message.chat.id, text, params);
	let $menu = [];
	var uid = message.from.id
	var text = message.text
	let dt = new Date
	console.log("[" + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + "] Пользователь " + uid + " отправил: " + text)

let user0 = await User.findOne({ id: 0 });
  if(!user0){
    let schema = {
      id: 0,
      buybalance: 5,
      outbalance: 0,
      outhbalance: 0,
      bhivebalance: 0,
      accumulation_balance: 0,
      deposit_balance: 0,
      wb_profits: 0,
      name: 'NMI_FUN',
      ref: 0,
      deposit: 0,
      payout: 0,
      fc: 0,
      game_balance: 0
    }
  
    let user = new User(schema);
    await user.save();
  }
  
  let user1 = await User.findOne({ id: 1 });
  if(!user1){
    let schema = {
      id: 1,
      buybalance: 5,
      outbalance: 0,
      outhbalance: 0,
      bhivebalance: 0,
      accumulation_balance: 0,
	  deposit_balance: 0,
      wb_profits: 0,
      name: 'NMI_FUN',
      ref: 0,
      deposit: 0,
      payout: 0,
      game_balance: 0,
      menu: "{\"price\":20,\"status\":true,\"count\":5,\"bought\":3}"
    }
  
    let user = new User(schema);
    await user.save();
  }
  
	Start.map((x) => $menu.push(x));
	if (ADMINS.find((x) => x == message.from.id)) $menu.push(["🔝 Админка"]);

	if (message.text) {
		if (message.text.startsWith('/start') || message.text == '🔙 Назад') {
			let $user = await User.findOne({ id: message.from.id });
			if (!$user) {
				let schema = {
					id: message.from.id,
					buybalance: 5,
					outbalance: 0,
					outhbalance: 0,
					bhivebalance: 0,
					accumulation_balance: 0,
					deposit_balance: 0,
					wb_profits: 0,
					name: message.from.first_name,
					fc: 0,
					ref: 0,
					regDate: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
					trees: [],
					deposit: 0,
					payout: 0,
					fetuses: 0,
					menu: "",
					lastCollect: Date.now(),
					ban: false,
					refCount: 0,
					not: false,
					data: "",
					bank: 0,
					game_balance: 0,
				}

				let reffer = Number(message.text.split('/start ')[1]);

				if (reffer) {
					let $reffer = await User.findOne({ id: reffer });
					if ($reffer) {
						schema.ref = $reffer.id;
						await $reffer.inc('buybalance', 0.20);
						await $reffer.inc('refCount', 1);
						bot.sendMessage($reffer.id, `🔔 Вы пригласили <a href="tg://user?id=${message.from.id}">партнёра</a> и получили 0.20₽`, { parse_mode: "HTML" });
					}
				}

				let user = new User(schema);
				await user.save();
			
			}

			let postfix = message.text.split('/start ')[1]
			if (postfix) {
				if (postfix[0] == "C") {
					message.user = await User.findOne({ id: message.from.id });

					var c = await Voucher.findOne({ id: postfix.substr(1) })
					if (c) {
						let total_balance = 0;
						message.user.trees.map((x) => {
							if ((((Date.now() - message.user.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60) > (trees.find((a) => a.id == x.id).earn * 72)) { total_balance += trees.find((a) => a.id == x.id).earn * 72; } else { total_balance += (((Date.now() - message.user.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60); }
						})
						await Voucher.deleteOne({ _id: c._id })
						await message.user.set('lastCollect', Date.now());
						await message.user.inc('fetuses', Number(total_balance.toFixed(2)));
						await message.user.trees.push({ id: c.tree_id, date: Date.now(), lastCollect: Date.now() });
						await message.user.save();
						bot.sendPhoto("@news_botov", `c${c.tree_id}.png`,  { caption: `✅ <a href="tg://user?id=${message.chat.id}">Пользователь</a> активировал чек и получил Персонажа - <b>${(trees.find((a) => a.id == c.tree_id)).name}</b>`, parse_mode: "HTML" });

						return bot.sendPhoto(message.chat.id, `c${c.tree_id}.png`, { caption: `✅ Вы успешно активировали чек и получили Персонажа - <b>${(trees.find((a) => a.id == c.tree_id)).name}</b>`, parse_mode: "HTML", })
					}
				}
			}
			return message.send(`
✌️ <b>Привет, ${message.from.first_name}</b>
📝 <b>Цель игры:</b>
├─Пополняем счет 🤘
├─Покупаем персонажей 🔰
├─Собираем coins 🛡️
├─Обмениваем coins 💱
└─Получаем деньги 💹
❓ Чем мы выплачиваем?
❗️ С пополнений бота, продажи рекламы и других наших проектов
📰 Новости: 👉 @news_botov
👤 <b>Чат</b> 👉 @chat_participant
📢 <b>Аукцион</b>  👉 @auction_iphone 
💳<b>Выплаты</b> 👉 @payments_bota`, {
				parse_mode: "HTML",
				reply_markup: {
					keyboard: $menu,
					resize_keyboard: true
				}
			});
		}
	}

	message.user = await User.findOne({ id: message.from.id });
	if (!message.user) return message.send(`Что-то пошло не так... Напишите /start`);
	if (message.user.ban) return
	if (!message.user.name || message.user.name != message.from.first_name)
		await User.findOneAndUpdate({ id: message.from.id }, { name: message.from.first_name })

	if (state[uid] == 7770 && ADMINS.indexOf(message.from.id) !== -1 && text != "0") {
		state[uid] = undefined
		bot.sendMessage(uid, "Рассылка запущена!").then((e) => {
			if (text.split("#").length == 4) {
				var btn_text = text.split("#")[1].split("#")[0].replace(/(^\s*)|(\s*)$/g, '')
				var btn_link = text.split("#")[2].split("#")[0].replace(/(^\s*)|(\s*)$/g, '')
				text = text.split("#")[0]
				mm_t(text, e.message_id, e.chat.id, true, btn_text, btn_link, 100)
			}
			else mm_t(text, e.message_id, e.chat.id, false, false, false, 100)
		})
	}
	
		if ((await bot.getChatMember("@invest_x_iphone_robot", uid)).status == "left" || (await bot.getChatMember("@Licifersss", uid)).status == "left") {

   return message.send(`❕ <b>Для использования бота, пожалуйста, подпишитесь на наши каналы:</b>`, { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "📤 Пополнения и Новости", url: "https://t.me/payments_bota" }], [{ text: "🤝Канал Прогера", url: "https://t.me/asik_prog" }]] } });
  }
  
	if (state[uid] == 77771 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
		bm.count = Number(text)
		bm.bought = 0
		bm.status = true
		await User.findOneAndUpdate({ id: 1 }, { menu: JSON.stringify(bm) })
		return message.send(`${text} персонажей выпущено на продажу по цене ${bm.price}!`, { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_bm" }]] } });
	}
	if (state[uid] == 77772 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
		bm.price = Number(text)
		await User.findOneAndUpdate({ id: 1 }, { menu: JSON.stringify(bm) })
		return message.send(`Стоимость персонажа установлена в ${bm.price} рублей!`, { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_bm" }]] } });
	}
	if (state[uid] == 77773 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
		bm.count = Number(text)
		await User.findOneAndUpdate({ id: 1 }, { menu: JSON.stringify(bm) })
		return message.send(`Количество доступных персонажей установлено в ${bm.count} штук!`, { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_bm" }]] } });
	}
    if (state[message.chat.id] == 99999 && ADMINS.indexOf(message.from.id) !== -1) {
		state[message.chat.id] = undefined
		var sum = Number(message.text)
		if (sum != 0) {
			var cid = generateID(8)
			var v = new Promo({ id: cid, sum: sum })
			await v.save()
			bot.sendMessage(message.chat.id, `Промокод создан!\n\n<code>P${cid}</code>`, { replyMarkup: Start, parse_mode: "HTML" });
		} else bot.sendMessage(message.chat.id, 'Создание промокода отменено!', { replyMarkup: Start });
	}
	if (state[message.chat.id] == 10000 && ADMINS.indexOf(message.from.id) !== -1) {
		state[message.chat.id] = undefined
		var sum = Number(message.text)
		if (sum != 0) {
			var cid = generateID(8)
			var v = new Promo({ id: cid, sum: sum })
			await v.save()
			bot.sendMessage(message.chat.id, `Промокод создан!\n\n<code>O${cid}</code>`, { replyMarkup: Start,parse_mode: "HTML" });
		} else bot.sendMessage(message.chat.id, 'Создание промокода отменено!', { replyMarkup: Start });
	}
	if (state[uid] == 7771 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		text = Number(text.replace("%", ""))
		await User.findOneAndUpdate({ id: 0 }, { deposit: text })
		bot.sendMessage("@news_botov", `🤑 <a href="tg://user?id=${message.chat.id}">Администратор</a> установил бонус к пополнению в <b>${text}%</b>`,{parse_mode: "HTML" })
		return message.send(`Бонус к пополнению в ${text}% установлен!`, { reply_markup: RM_admin_return });
	}

	if (state[uid] == 77712 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		text = Number(text.replace("%", ""))
		await User.findOneAndUpdate({ id: 0 }, { bhivebalance: text })
		bot.sendMessage("@news_botov", `🤑 <a href="tg://user?id=${message.chat.id}">Администратор</a> установил бонус к реинвесту в <b>${text}%</b>`,{parse_mode: "HTML" })
		return message.send(`Бонус к реинвесту в ${text}% установлен!`, { reply_markup: RM_admin_return });
	}

	if (state[uid] == 777122 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		text = Number(text.replace("%", ""))
		await User.findOneAndUpdate({ id: 0 }, { totalEarn: text })
		return message.send(`Курс WAVES в ${text} рубинов установлен!`, { reply_markup: RM_admin_return });
	}
	
	if (state[uid] == 7771222 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		text = Number(text.replace("%", ""))
		await User.findOneAndUpdate({ id: 0 }, { bhivebalance: text })
		return message.send(`Лимит на персонажей в ${text} единиц установлен!`, { reply_markup: RM_admin_return });
	}
	
	if (state[uid] == 15) {
		var sum = Number(message.text)
   if (isNaN(sum)) return message.send('Введите сумму!');
   if (sum < 1) return message.send('Введите сумму больше 1₽!');
   state[uid] = 15
   return bot.sendMessage(message.chat.id, `В данном разделе вы сумеете рассчитать вашу прибыль, от суммы инвестиции: 

💵 Ваша инвестиция: <b>${sum * 1}₽</b>

▪️ Ваш профит: <b>${sum * 1.5}₽</b>`, {
	             parse_mode: "HTML",
                 reply_markup: {
					keyboard: $menu,
					resize_keyboard: true
				}
			});
		}
		
		if (state[uid] == 777122289 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		text = Number(text.replace("%", ""))
		await User.findOneAndUpdate({ id: 0 }, { outbalance: text })
		bot.sendMessage("@news_botov", `🤑 <a href="tg://user?id=${message.chat.id}">Администратор</a> установил бонус к выводу в <b>${text}%</b>`,{parse_mode: "HTML" })
		return message.send(`Бонус к выводу в ${text}% установлен!`, { reply_markup: RM_admin_return });
	}
	
	if (state[uid] == 133) {
			//  var kredit = message.user.kredit ? true : false 
		message.text = Number(message.text);
		if (message.text <= 0) return message.send('Введите сумму больше 0:');
		if (message.text < 100) return message.send(`Не хватает ${roundPlus( 100 - message.text)}₽`);
		if (message.user.kredit_balance > message.text) return message.send('Недостаточно средств.');
		if (message.user.kredit_balance <= message.text) {
			 message.user.kredit = 1
		await message.user.dec('kredit_balance', message.text);
		await message.user.inc('deposit_balance', message.text);
			state[uid] = undefined
			return message.send(`💳 Вы успешно инвестировали свои кредитные средства в размере <b>${message.text}₽ И открыли кредит.</b>. Удачного профита!`, {
				parse_mode: "HTML",
				reply_markup: {
					keyboard: Start,
					resize_keyboard: true
				}
			});
		}
	}
	
	if (state[uid] == 13) {
		message.text = Number(message.text);
		if (message.text <= 0) return message.send('Введите сумму больше 0:');
		if (message.text < 100) return message.send(`Не хватает ${roundPlus( 100 - message.text)}₽`);
		if (message.text > message.user.game_balance) return message.send('Недостаточно средств.');
		if (message.text <= message.user.game_balance) {
		var bi = (await User.findOneAndUpdate({ id: 0 })). fetuses
		await message.user.dec('game_balance', message.text);
		await message.user.inc('deposit_balance', message.text * (1 + bi / 100));
		var str = ""
		if (bi > 0)
			str = `\n🔥 <b>Вы получаете бонус - ${roundPlus(message.text * (bi / 100))}₽!</b>`
			state[uid] = undefined
			return message.send(`💳 Вы успешно инвестировали свои средства в размере <b>${roundPlus(message.text)}₽</b> и ${str}. Удачного профита!`, {
				parse_mode: "HTML",
				reply_markup: {
					keyboard: Start,
					resize_keyboard: true
				}
			});
		}
	}
	
	if (state[uid] == 14) {
		message.text = Number(message.text);
		if (message.text <= 0) return message.send('Введите сумму больше 0:');
		if (message.text < 20) return message.send(`Не хватает ${roundPlus( 20 -message.text)}₽`);
		if (message.text > message.user.accumulation_balance) return message.send('Недостаточно средств.');
		if (message.text <= message.user.accumulation_balance) {
			var bs = (await User.findOneAndUpdate({ id: 0 })). fetuses
		await message.user.dec('accumulation_balance', message.text);
		await message.user.inc('outbalance', message.text * (1 + bs / 100));
		var str = ""
		if (bs > 0)
			str = `\n🔥 <b>Вы получаете бонус - ${roundPlus(message.text * (bs / 100))}₽!</b>`
			state[uid] = undefined
			return message.send(`💳 Вы успешно перевели свои накопления в размере <b>${roundPlus(message.text)}₽</b> и ${str}. Средства зачислены на баланс вывода!`, {
				parse_mode: "HTML",
				reply_markup: {
					keyboard: Start,
					resize_keyboard: true
				}
			});
		}
	}

	if (state[uid] == 7772 && ADMINS.indexOf(message.from.id) !== -1 && text != "0") {
		state[uid] = undefined

		message.text = Number(message.text);
		let user = await User.findOne({ id: message.text });
		let u = user
		if (!user) return message.send('Пользователь не найден');

		let partners = await User.find({ ref: message.text });
		await message.user.set('menu', '');
		var kb = { inline_keyboard: [] }
		if (u.ban) kb.inline_keyboard.push([{ text: "♻️ Разбанить", callback_data: "unban_" + u.id }])
		else kb.inline_keyboard.push([{ text: "🛑 Забанить", callback_data: "ban_" + u.id }])
		kb.inline_keyboard.push([{ text: "➕ Баланс покупок", callback_data: "addBuyBal_" + u.id }, { text: "✏️ Баланс покупок", callback_data: "editBuyBal_" + u.id }])
		kb.inline_keyboard.push([{ text: "➕ Баланс вывода", callback_data: "addOutBal_" + u.id }, { text: "✏️ Баланс вывода", callback_data: "editOutBal_" + u.id }])
		kb.inline_keyboard.push([{ text: "➕ Пополнения", callback_data: "addPayIns_" + u.id }, { text: "✏️ Пополнения", callback_data: "editPayIns_" + u.id }])
		kb.inline_keyboard.push([{ text: "➕ Выведено", callback_data: "addPayOuts_" + u.id }, { text: "✏️ Выведено", callback_data: "editPayOuts_" + u.id }])
		kb.inline_keyboard.push([{ text: "❌ Забрать Персонажев", callback_data: "takeTree_" + u.id }, { text: "Обнулить пользователя", callback_data: "adminwipe_" + u.id }])

		kb.inline_keyboard.push([{ text: "◀️ Назад", callback_data: "admin_return" }])

		return message.send(`📝 Пригласил: <b>${partners.length}</b>

🆔 ID: <code>${user.id}</code> 

<a href="tg://user?id=${user.id}">Пользователь</a>

💰 Баланс:
🛒 Для покупок: ${user.buybalance.toFixed(2)}₽
📭 Для вывода: ${user.outbalance.toFixed(2)}₽

Персонажей: <b>${user.trees.length}</b>

<b>Пополнил: ${roundPlus(user.deposit)}₽</b>
<b>Вывел: ${roundPlus(user.payout)}₽</b>

👑 Клан: ${user.clanName || "<i>не состоит</i>"}
${user.ref != 0 ? `<a href="tg://user?id=${user.ref}">Реферер</a>` : "<i>нет реферера</i>"}
`, {
			parse_mode: "HTML",
			reply_markup: kb
		});

	}

	if (state[uid] == 7773 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		await User.findOneAndUpdate({ id: data[uid] }, { $inc: { buybalance: Number(text) } })
		bot.sendMessage(data[uid], `💰 Ваш баланс для покупок пополнен на <b>${text}₽</b>!`, { parse_mode: html })
		return message.send(`Баланс для покупок пользователя пополнен на ${text}₽!`, { reply_markup: RM_admin_return });
	}
	if (state[uid] == 7774 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		await User.findOneAndUpdate({ id: data[uid] }, { $inc: { outbalance: Number(text) } })
		bot.sendMessage(data[uid], `💰 Ваш баланс для вывода пополнен на <b>${text}₽</b>!`, { parse_mode: html })
		return message.send(`Баланс для вывода пользователя пополнен на ${text}₽!`, { reply_markup: RM_admin_return });
	}
	if (state[uid] == 77745 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		await User.findOneAndUpdate({ id: data[uid] }, { $inc: { bhivebalance: Number(text) } })
		bot.sendMessage(data[uid], `💰 Ваш баланс криптовалюты WAVES пополнен на <b>${text}₽</b>!`, { parse_mode: html })
		return message.send(`WAVES баланс пользователя пополнен на ${text} WAVES!`, { reply_markup: RM_admin_return });
	}
	if (state[uid] == 777455 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		await User.findOneAndUpdate({ id: data[uid] }, { deposit: Number(text) })
		bot.sendMessage(data[uid], `💰 Ваш сумма Ваших пополнений пополнена на <b>${text}₽</b>!`, { parse_mode: html })
		return message.send(`Сумма пополнений пользователя пополнена на ${text}₽!`, { reply_markup: RM_admin_return });
	}
	if (state[uid] == 77745555 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		await User.findOneAndUpdate({ id: data[uid] }, { payout: Number(text) })
		bot.sendMessage(data[uid], `💰 Ваш сумма Ваших выводов пополнена на <b>${text}₽</b>!`, { parse_mode: html })
		return message.send(`Сумма выводов пользователя пополнена на ${text}₽!`, { reply_markup: RM_admin_return });
	}
	if (state[uid] == 7775 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		await User.findOneAndUpdate({ id: data[uid] }, { buybalance: Number(text) })
		bot.sendMessage(data[uid], `💰 Ваш баланс для покупок изменён на <b>${text}₽</b>!`, { parse_mode: html })
		return message.send(`Баланс для покупок пользователя изменён на ${text}₽!`, { reply_markup: RM_admin_return });
	}
	if (state[uid] == 111222 && ADMINS.indexOf(message.from.id) !== -1) {
  state[uid] = undefined
  await User.findOneAndUpdate({ id: data[uid] })
  bot.sendMessage(data[uid], `${text}`, { parse_mode: html })
        return message.send(`Сообщение отправлено пользователю!`, { reply_markup: RM_admin_return });
        }
	if (state[uid] == 7776 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		await User.findOneAndUpdate({ id: data[uid] }, { outbalance: Number(text) })
		bot.sendMessage(data[uid], `💰 Ваш баланс для вывода изменён на <b>${text}₽</b>!`, { parse_mode: html })
		return message.send(`Баланс для вывода пользователя изменён на ${text}₽!`, { reply_markup: RM_admin_return });
	}
	if (state[uid] == 77765 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		await User.findOneAndUpdate({ id: data[uid] }, { bhivebalance: Number(text) })
		bot.sendMessage(data[uid], `💰 Ваш баланс криптовалюты WAVES изменён на <b>${text}₽</b>!`, { parse_mode: html })
		return message.send(`WAVES Баланс пользователя изменён на ${text} WAVES!`, { reply_markup: RM_admin_return });
	}
	if (state[uid] == 777655 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		await User.findOneAndUpdate({ id: data[uid] }, { deposit: Number(text) })
		bot.sendMessage(data[uid], `💰 Ваш сумма Ваших пополнений измена на <b>${text}₽</b>!`, { parse_mode: html })
		return message.send(`Сумма пополнений пользователя изменёна на ${text}₽!`, { reply_markup: RM_admin_return });
	}
	if (state[uid] == 77765555 && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		await User.findOneAndUpdate({ id: data[uid] }, { payout: Number(text) })
		bot.sendMessage(data[uid], `💰 Ваш сумма Ваших выводов измена на <b>${text}₽</b>!`, { parse_mode: html })
		return message.send(`Сумма выводов пользователя изменёна на ${text}₽!`, { reply_markup: RM_admin_return });
	}
	
	if (message.text.startsWith("/eval") && ADMINS.indexOf(message.from.id) !== -1) {
		return message.send(`${eval(text)}`, { reply_markup: RM_admin_return });
	}
	
	
	

	if (message.text) {
		if (message.text == '🚫 Отмена') {
			state[uid] = undefined
			await message.user.set('menu', '');
			return message.send('🚫 Отменено.', {
				reply_markup: {
					keyboard: $menu,
					resize_keyboard: true
				}
			});
		}
	}
	var a = await getAuction()

	if (state[uid] == 77777) {
		message.text = Number(message.text);

		if (message.user.buybalance < 10) { return bot.answerCallbackQuery(query.id, 'На башем балансе недостаточно средств для начальной ставки!', true) }
		if (!message.text) return message.send('Введите число:')
		if (message.text < 10) return message.send('Минимальная начальная ставка - 10 рублей!')
		if (message.text > message.user.buybalance) return message.send('На башем балансе недостаточно средств, введите другую сумму:')
		var a = await getAuction()
		if (a.status == true) return message.send('Аукцион уже начался!')
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -message.text } })
		state[uid] = undefined
		message.send(`✅ <b>Вы начали аукцион ставкой в ${message.text} рублей!</b>`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: $menu,
				resize_keyboard: true
			}
		});
		message.user.name = message.from.first_name
		return startAuction(message.user, message.text)
	}

	if (message.user.menu == 'reinvest') {
		message.text = Number(message.text);
		if (!message.text) return message.send('Введите сумму для реинвестирования!');
		if (message.text <= 0) return message.send('Введите сумму для реинвестирования!');
		if (message.text > message.user.outbalance) return message.send('Недостаточно средств.');
		await message.user.set('menu', '');
		var b = (await User.findOneAndUpdate({ id: 0 })).bhivebalance
		await message.user.dec('outbalance', message.text);
		await message.user.inc('buybalance', message.text * (1 + b / 100));
		var str = ""
		if (b > 0)
			str = `\n🔥 <b>Вы получаете бонус - ${roundPlus(message.text * (b / 100))} рублей!</b>`
		return message.send(`♻️ Вы успешно реинвестировали <b>${roundPlus(message.text)} рублей</b>${str}`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: $menu,
				resize_keyboard: true
			}
		});
	}
	if (message.user.menu == 'reinvests') {
		message.text = Number(message.text);
		if (!message.text) return message.send('Введите сумму для покупки FlashCoin!');
		if (message.text <= 0) return message.send('Введите сумму для покупки FlashCoin!');
		if (message.text > message.user.buybalance) return message.send('Недостаточно средств.');
		await message.user.set('menu', '');
		var b = (await User.findOneAndUpdate({ id: 0 })).bhivebalance
		await message.user.dec('buybalance', message.text);
		await message.user.inc('bhivebalance', message.text * (1 + b / 100));
		var str = ""
		if (b > 0)
			str = `\n🔥 <b>Вы получаете бонус - ${roundPlus(message.text * (b / 100))} рублей!</b>`
		return message.send(`♻️ Вы успешно реинвестировали <b>${roundPlus(message.text)} рублей</b>${str}`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: $menu,
				resize_keyboard: true
			}
		});
	}
	if (message.user.menu == 'buywaves') {
		message.text = Number(message.text);
		var price = (await User.findOneAndUpdate({ id: 0 })).totalEarn
		var amount = message.text * price
		if (!message.text) return message.send('Введите количество WAVES для покупки!');
		if (message.text < 1) return message.send('Введите сумму больше 1 WAVES!');
		if (amount > message.user.buybalance) return message.send('На Вашем балансе для покупок недостаточно средств');
		await message.user.set('menu', '');
		await message.user.dec('buybalance', amount);
		await message.user.inc('bhivebalance', message.text);
		return message.send(`💳 Вы успешно купили <b>${roundPlus(message.text)} WAVES</b> за <b>${roundPlus(amount)} рубинов</b>`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: $menu,
				resize_keyboard: true
			}
		});
	}

	if (state[uid] == 66666) {
		message.text = Number(message.text);
		if (!message.text) return message.send('Введите число:');
		if (message.text <= 0) return message.send('Введите сумму больше 0:');
		if (message.text > message.user.outbalance) return message.send('Недостаточно средств.');
		if (message.text <= message.user.outbalance) {
			await message.user.dec('outbalance', message.text);
			await message.user.inc('game_balance', message.text);
			await message.user.inc('game_payin', message.text);
			state[uid] = undefined
			return message.send(`💳 Вы успешно пополнили игровой баланс на ${message.text}₽ с баланса для вывода!`, {
				reply_markup: {
					keyboard: $menu,
					resize_keyboard: true
				}
			});
		}
	}

	if (state[uid] == 66667) {
		message.text = Number(message.text);
		if (!message.text) return message.send('Введите число:');
		if (message.text <= 0) return message.send('Введите сумму больше 0:');
		if (message.text > message.user.game_balance) return message.send('Недостаточно средств.');
		if (message.text <= message.user.game_balance) {
			await message.user.dec('game_balance', message.text);
			await message.user.inc('outbalance', message.text);
			await message.user.inc('game_payout', message.text);
			state[uid] = undefined
			return message.send(`💳 Вы успешно вывели ${message.text}₽ с игрового баланса на баланс для вывода!`, {
				reply_markup: {
					keyboard: $menu,
					resize_keyboard: true
				}
			});
		}
	}

	if (message.user.menu.startsWith('amountQiwi')) {
		message.text = Number(message.text);

		if (!message.text) return message.send('Введите сумму на вывод!');
		if (message.text <= 0) return message.send('Введите сумму на вывод!');

		if (message.text > message.user.outbalance) return message.send('Недостаточно средств.');
		if (message.text < 17) return message.send('Введите сумму более 17 рублей!');
		if (message.text > message.user.deposit * 1.5 - message.user.payout) return message.send(`Сумма превышает лимит выплат!\nВы можете вывести максимально ${roundPlus(message.user.deposit * 1.5 - message.user.payout)} рублей`);
        if (message.text + message.user.payout >= message.user.deposit * 1.5) {
				message.send(`Вы вывели из бота в 1.5 раза больше, чем вложил\nВаш аккаунт обнулён`);
				await message.user.updateOne({ trees: [], buybalance: 0, outbalance: 0, deposit: 0, payout: 0 })
				await WildBee.updateMany({ creator_id: uid }, { level: 1 })
			}

		if (message.text <= message.user.outbalance) {
			await message.user.dec('outbalance', message.text);
			//await message.user.inc('payout', message.text);
			let ticket = new Ticket({
				id: message.from.id,
				amount: message.text,
				wallet: message.user.menu.split('amountQiwi')[1]
			});

			await ticket.save();
			await message.user.set('menu', '');
			
			ADMINS.map((x) => bot.sendMessage(x, "Новая заявка на вывод!!!"));
			
			bot.sendMessage("@news_botov", `🤑 <a href="tg://user?id=${message.chat.id}">Пользователь</a> создал новую заявку на вывод !`,{parse_mode: "HTML" })

			return message.send('✅ Заявка на выплату создана, ожидайте до 48-х часов!', {
				reply_markup: {
					keyboard: $menu,
					resize_keyboard: true
				}
			});
		}
	}

	if (message.user.menu == 'qiwi') {

		if (message.text.length < 5) return message.send('Введите правильный номер!', {
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});



		await message.user.set('menu', 'amountQiwi' + message.text);
		return message.send(`Введите сумму на вывод. Вы можете вывести ${message.user.outbalance.toFixed(2)}₽`);
	}

	if (message.text) {
		if (message.text == '🔰 Персонажи') {
			return message.send('Выберите, куда зайти.', {
				reply_markup: {
					inline_keyboard: [
						[{ text: "💒Магазин", callback_data: "store" }, { text: "🕵️‍♂️Мои персонажи", callback_data: "trees:inv0" }],
						[{text: "🎫Промокод", callback_data: "promoact"}]
					]
				}
			});
		}
		if (message.text == '🎲 Тамагочи') {
			var reply_markup
			var t = await Tamagochi.findOne({ creator_id: uid })
			if (!t)
				reply_markup = { inline_keyboard: [[{ text: "🧱 Купить героя за 1000 рублей", callback_data: "malBuy" }]] }
			else
				reply_markup = { inline_keyboard: [[{ text: "🧱 Мой герой", callback_data: "malMy" }]] }
			return bot.sendMessage(uid, `
<b>Это легендарная игра Тамагочи!</b>
Суть <b>ее очень проста</b>:
<i>1. Покупаем Героя, кормим его, заботимся  и получаем за это хорошее денежное вознаграждение, а именно +1% прибыли день
2. Срок жизни Героя = 30 дней, что равно +30% чистыми от стоимости Героя
3. Продать вашего Героя можно только спустя 30 дней (продать досрочно невозможно)
4. Кормить Героя  нужно минимум 1 раз в 12 часов и 1 раз в 24 часа нужно убирать в районе - эти процессы бесплатны и могут производиться сколько угодно раз за день
5. Если же вы не покормите или не уберёте в Районе в указанные сроки, то Герой заболевает
6. Чтобы его вылечить, нужно заплатить 50 рублей с баланса для покупок
7. Если ваш Герой заболел, и вы его в течении следующих 12 часов не вылечите, то он умирает, затраченные деньги на Героя идут в резерв проекта
8. После того, как Герой созрел, проект автоматически его выкупает, деньги поступают на ваш баланс для вывода
</i>
<b>Стоимость 1000 рублей</b>
						`, {
				reply_markup, parse_mode: "html"
			});
		}

		if (message.text == '🎲 Игры') {
			return message.send(`<b>🎲 Игры:</b>`, {
				parse_mode: "html",
				reply_markup: {
					inline_keyboard: [
						[{ text: "💈 Рулетка", callback_data: "game_roulette" }],
					]
				}
			});
		}

		if (message.text == '♻️ Обмен') {
			return message.send(`Здесь Вы сможете обменять <b> 🛡️  Защиту</b> на <b>₽ рубли</b>

1000  Coins  🛡️ = 1 рубль
Минимальная сумма обмена: 1000  🛡️  Coins
								
 🛡️ <b>Ваши Coins:</b> ${message.user.fetuses.toFixed(2)}
								
После обмена 70% попадает на баланс для покупок, а остальные 30% на баланс для вывода`, {
				reply_markup: {
					inline_keyboard: [
						[{ text: "🔄 Обменять", callback_data: "exchange" }]
					]
				},
				parse_mode: "html"
			});

		}

		if (message.text == '🖥 Личный кабинет') {
			return message.send(`📝 Имя: <b>${message.from.first_name.replace(/(\<|\>)/g, '')}</b>

🆔 <b>ID:</b> <code>${message.from.id}</code>

🛒 <b>На покупки:</b> ${message.user.buybalance.toFixed(2)}₽
📭 <b>На вывод:</b> ${message.user.outbalance.toFixed(2)}₽
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
🛑 <b>Вы можете вывести:</b> ${roundPlus(message.user.deposit * 1.5 - message.user.payout)}₽

<b>Персонажей:</b> ${message.user.trees.length}

🗣 <b>Партнеров привлечено:</b> ${await User.countDocuments({ ref: message.from.id })}
👥 <b>Вас привел:</b> ${message.user.ref != 0 ? `<a href="tg://user?id=${message.user.ref}">Пользователь</a>` : "<i>Никто</i>"}

💸 <b>Пополнено:</b> ${message.user.deposit.toFixed(2)}₽
🤑 <b>Выведено:</b> ${message.user.payout.toFixed(2)}₽
❕ <b>1000  Coins = 1₽</b>`, {
				parse_mode: "HTML",
				reply_markup: {
					inline_keyboard: [
						[{ text: "📥 Пополнить", callback_data: "deposit" }, { text: "📤 Вывести", callback_data: "withdraw" }],
						[{ text: "♻️ Реинвест", callback_data: "reinvest" }, { text: "🔰 Мои персонажи", callback_data: "trees:totalMy" }],
					]
				}
			});
		}
		
		if (message.text == '/wipe') {
   return message.send(`После нажатия на кнопку будет WIPE бота.\nТы уверен?`, {
    parse_mode: "HTML",
    reply_markup: {
     inline_keyboard: [
      [{ text: "🚫 Обнулить", callback_data: "wipe"}, { text: "⏪ Назад", callback_data: "admin_return" }],
     ]
    }
   });
  }
        
	if (message.text == '/secret') {
   return message.send(`Добро пожаловать в секретное меню бота.`
, {
    parse_mode: "HTML",
       reply_markup: {
            keyboard: Sekret,
            resize_keyboard: true,
       }
  })
 }
 
 if (message.text == '🤫 Клад') {
			return message.send(`Повезет ли тебе`, {
				parse_mode: "HTML",
				reply_markup: {
					inline_keyboard: [
						[{ text: "💣 Взорвать стенку ", callback_data: "takeklad" }, { text: "📝 Меню", callback_data: "klad_back" }],
					]
				}
			});
		}
 
        if (state[uid] == 11000) {
			let postfix = message.text
				if (postfix[0] == "P") {
					message.user = await User.findOne({ id: message.from.id });

					var c = await Promo.findOne({ id: postfix.substr(1) })
					var sum = c.sum
					if (c) {
						bot.sendMessage("@news_botov", `🤑 <a href="tg://user?id=${message.chat.id}">Пользователь</a> активировал промокод для покупок на сумму <b>${sum}</b> рублей`,{parse_mode: "HTML" })
						bot.sendMessage(message.from.id, "✅ Вы активировали промокод на <b>" + sum + "</b> рублей для покупок", { parse_mode: "HTML" })
						await Promo.deleteOne({ _id: c._id })
						await message.user.inc("buybalance", sum)
						state[uid] = undefined
					}
					else
					bot.sendMessage(message.from.id, "😞 Промокод не найден")
					state[uid] = undefined
				}
			else if (postfix[0] == "O") {
					message.user = await User.findOne({ id: message.from.id });

					var c = await Promo.findOne({ id: postfix.substr(1) })
					if (c) {
						var sum = c.sum
						bot.sendMessage("@news_botov", `🤑 <a href="tg://user?id=${message.chat.id}">Пользователь</a> активировал промокод для вывода на сумму <b>${sum}</b> рублей`,{parse_mode: "HTML" })
						bot.sendMessage(message.from.id, "✅ Вы активировали промокод на <b>" + sum + "</b> рублей для вывода", { parse_mode: "HTML" })
						await Promo.deleteOne({ _id: c._id })
						await message.user.inc("outbalance", sum)
						state[uid] = undefined
					}
					else
					bot.sendMessage(message.from.id, "😞 Промокод не найден")
					state[uid] = undefined
				}
			}
	}




		if (message.text == '👥 Партнёры') {
			return message.send(`<b>🤝 Партнёрская программа:</b>
🔑 Вы получаете:
▫️ 0.20 💸 за каждого приглашенного партнёра
▫️ 10% с пополнений ваших партнёров:
	По 5% на балансы для покупок и для вывода
		   
🔗 Ваша ссылка для приглашений: https://t.me/invest_x_iphone_robot?start=${message.from.id}
		   
🎊 Вы уже пригласили: ${await User.countDocuments({ ref: message.from.id })}
		`, {
				parse_mode: "HTML"
			})
		}

		if (message.text == '👑 Банда') {
			if (!message.user.clanName)
				return message.send(`
🤷‍♂️ Ты пока еще не состоишь в клане!

😎 Ты можешь либо создать его сам, либо дождаться, пока кто-то тебя пригласит!
				   
📌 Цена создания  клана, которая может содержать в себе до 10 человек - 65 рублей!
`, {
					parse_mode: "HTML", reply_markup: {
						inline_keyboard: [
							[{ text: "➕ Создать  клан (65 рублей)", callback_data: "clan_create" }],
							[{ text: "🐯 Топ  кланов", callback_data: "clan_top" }],
							[{ text: "❗️ Статус битвы", callback_data: "clan_status" }],
						]
					}
				})

			else {
				var clan = await Clan.findOne({ name: message.user.clanName })
				var members = await User.find({ $and: [{ id: { $ne: clan.zam_id } }, { id: { $ne: clan.creator_id } }], clanName: clan.name })
				var admin = await User.findOne({ id: clan.creator_id })
				var zam = await User.findOne({ id: clan.zam_id })
				var reply_markup = { inline_keyboard: [] }
				if (clan.creator_id == uid || clan.zam_id == uid)
					reply_markup.inline_keyboard.push([{ text: "⚙️ Управление  Кланом", callback_data: "clan_admin" }])
				reply_markup.inline_keyboard.push([{ text: "💳 Пополнить баланс  Клана", callback_data: "clan_payin" }])
				reply_markup.inline_keyboard.push([{ text: "🐯 Топ  Кланов", callback_data: "clan_top" }])
				reply_markup.inline_keyboard.push([{ text: "❗️ Статус битвы", callback_data: "clan_status" }])
				return message.send(`
🐯 <b>Ваш Клан:</b> ${clan.name}\n
<b>Участники  Банды:</b>
Имя | Доходность
👑 <b>Глава</b> - <a href="tg://user?id=${clan.creator_id}">${clan.creator_name}</a> | ${admin.totalEarn}  🛡️/час${clan.zam_id ? `\n👨‍⚕️ <b>Заместитель</b> - <a href="tg://user?id=${clan.zam_id}">${clan.zam_name}</a> | ${zam.totalEarn}  🛡️/час` : ""}
${members.map(m => { return `<a href="tg://user?id=${m.id}">${m.name}</a> | ${m.totalEarn}  🛡️/час` }).join("\n")}\n
<b>Доход казны:</b> ${clan.level}%
<b>Всего игроков в Банде:</b> ${members.length + 1 + Number(Boolean(clan.zam_id))} из ${clan.maxMembers}
<b>Доходность  Клана:</b> ${roundPlus(clan.total_earn)}  🛡️/час
<b>В казне:</b> ${roundPlus(clan.balance)}  🛡️
<b>На балансе:</b> ${roundPlus(clan.bal)}₽\n
<b>Покинуть Клан:</b> /leave_clan
`, {
					parse_mode: "HTML", reply_markup
				})
			}
		}

		if (state[uid] == 1601) {
			if (message.user.buybalance < 65) return message.send(`На Вашем балансе для покупок недостаточно средств для создания  Клана!`, { parse_mode: "HTML" });
			if ((await Clan.findOne({ name: message.text })) != null) return message.send(` Клан с таким названием уже существует!\nВведите другое название  Клана:`, { parse_mode: "HTML" });
			state[uid] = undefined
			await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -65 }, clanName: message.text })
			await Clan.insertMany([{
				name: message.text,
				maxMembers: 10,
				members: 1,
				balance: 0,
				creator_id: uid,
				creator_name: message.from.first_name,
				zam_id: 0,
				zam_name: "",
				total_earn: message.user.totalEarn,
				level: 1,
				bal: 0
			}])
			return message.send(' Клан создан!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
		}

		if (state[uid] == 160101) {
			var sum = Number(message.text)
			var clan = await Clan.findOne({ name: message.user.clanName })
			if (isNaN(sum)) return message.send(`Введите число:`, { parse_mode: "HTML" });
			if (sum <= 0) return message.send(`Введите положительное число:`, { parse_mode: "HTML" });
			if (!clan) return message.send(`Вы не состоите в  Клане!`, { parse_mode: "HTML" });
			if (message.user.buybalance < sum) return message.send(`На Вашем балансе для покупок недостаточно средств для пополнения баланса  Клана!`, { parse_mode: "HTML" });
			state[uid] = undefined
			await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -sum } })
			await Clan.findOneAndUpdate({ _id: clan._id }, { $inc: { bal: sum } })
			return message.send(`Баланс  Клана пополнен на ${sum}₽!`, { reply_markup: { keyboard: $menu, resize_keyboard: true } });
		}

		if (message.text.startsWith("/invite") && !message.text.startsWith("/invitezam")) {
			var clan = await Clan.findOne({ name: message.user.clanName })
			var members = await User.find({ clanName: clan.name })
			if (clan.creator_id != uid && clan.zam_id != uid) return
			if (members.length > clan.maxMembers - 1) return message.send('В  Клане закончились места!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			var us = await User.findOne({ id: Number(message.text.split(" ")[1]) })
			if (!us) return message.send('Пользователь не найден в боте!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			if (us.clanName) return message.send('Пользователь уже состоит в  Клане!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			await bot.sendMessage(Number(message.text.split(" ")[1]), `<a href="tg://user?id=${uid}">${message.from.first_name}</a> приглашает Вас в  Клан<b>${clan.name}</b>:`, { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "✅ Подтвердить", callback_data: "clanAccept_" + clan._id }, { text: "❌ Отменить", callback_data: "clanDecline" }]] } })
			return message.send(`Запрос на вступление в Клан отправлен <a href="tg://user?id=${Number(message.text.split(" ")[1])}">пользователю</a>!`, { parse_mode: "html", reply_markup: { keyboard: $menu, resize_keyboard: true } });
		}

		if (message.text.startsWith("/kick")) {
			var clan = await Clan.findOne({ name: message.user.clanName })
			var us = await User.findOne({ id: Number(message.text.split(" ")[1]) })
			if (clan.creator_id != uid && clan.zam_id != uid) return
			if (!us) return message.send('Пользователь не найден в боте!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			if (us.clanName != clan.name) return message.send('Пользователь не состоит в Вашем Клане!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			if (us.id == uid) return message.send('Вы не можете выгнать себя!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			await User.findOneAndUpdate({ id: us.id }, { $unset: { clanName: 1 } })
			await bot.sendMessage(Number(message.text.split(" ")[1]), `❌ Вы были выгнаны из  Клана <b>${clan.name}</b>!`, { parse_mode: "html" })
			return message.send(`Вы выгнали <a href="tg://user?id=${Number(message.text.split(" ")[1])}">пользователя</a> из  Клана!`, { parse_mode: "html", reply_markup: { keyboard: $menu, resize_keyboard: true } });
		}
		if (message.text.startsWith("/removeGuestHouse")) {
			var clan = await Clan.findOne({ name: message.user.clanName })
			if (clan.creator_id != uid) return
			await Clan.deleteOne({ name: clan.name })
			var users = await User.find({ clanName: clan.name })
			await User.updateMany({ clanName: clan.name }, { $unset: { clanName: 1 } })
			for (const i in users) await bot.sendMessage(users[i].id, `❗️ Ваш Клан был удалён создателем!`, { parse_mode: "html" })
			return
		}
		if (message.text.startsWith("/invitezam")) {
			var clan = await Clan.findOne({ name: message.user.clanName })
			var us = await User.findOne({ id: Number(message.text.split(" ")[1]) })
			if (clan.creator_id != uid && clan.zam_id != uid) return
			if (!us) return message.send('Пользователь не найден в боте!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			if (us.clanName != clan.name) return message.send('Пользователь не состоит в Вашем Клане!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			if (us.id == uid) return message.send('Вы не назначить заместителям себя!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			await Clan.findOneAndUpdate({ name: clan.name }, { zam_id: us.id, zam_name: us.name })
			await bot.sendMessage(us.id, `❗️ Вы стали заместителем админа  Клана <b>${clan.name}</b>!`, { parse_mode: "html" })
			return message.send(`Вы сделали <a href="tg://user?id=${us.id}">пользователя</a> своим заместителем!`, { parse_mode: "html", reply_markup: { keyboard: $menu, resize_keyboard: true } });
		}
		if (message.text.startsWith("/removezam")) {
			var clan = await Clan.findOne({ name: message.user.clanName })
			if (clan.creator_id != uid && clan.zam_id != uid) return
			await Clan.findOneAndUpdate({ name: clan.name }, { zam_id: 0 })
			await bot.sendMessage(clan.zam_id, `❗️ Вы больше не заместитель админа  Клана <b>${clan.name}</b>!`, { parse_mode: "html" })
			return message.send(`<a href="tg://user?id=${clan.zam_id}">Пользователь</a> больше не Ваш заместитель!`, { parse_mode: "html", reply_markup: { keyboard: $menu, resize_keyboard: true } });
		}

		if (message.text.startsWith("/leave_clan")) {
			var clan = await Clan.findOne({ name: message.user.clanName })
			if (!message.user.clanName) return message.send('Вы еще не состоите в Клане!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			if (clan.creator_id == uid && !clan.zam_id) return message.send('Вы не можете выйти из своего Клана не назначив заместителя!', { reply_markup: { keyboard: $menu, resize_keyboard: true } });
			else if (clan.creator_id == uid && clan.zam_id) {
				await Clan.findOneAndUpdate({ name: clan.name }, { creator_id: clan.zam_id, creator_name: clan.zam_name, zam_id: 0 })
				await bot.sendMessage(clan.zam_id, `❗️ Вы стали администратором  Клана <b>${clan.name}</b> по причине выхода владельца!`, { parse_mode: "html" })
			}
			else if (clan.zam_id == uid) await Clan.findOneAndUpdate({ name: clan.name }, { zam_id: 0 })
			await User.findOneAndUpdate({ id: uid }, { $unset: { clanName: 1 } })
			await bot.sendMessage(uid, `❌ Вы вышли из  Банды <b>${clan.name}</b>!`, { parse_mode: "html" })
			await bot.sendMessage(clan.creator_id, `<a href="tg://user?id=${uid}">Пользователь</a> вышел из Вашего  Клана!`, { parse_mode: "html" })
		}

		if (message.text == '📚 О боте') {
			var s = await User.findOne({ id: 0 })
			let stats = {
				users: await User.countDocuments(),
				users_today: await User.find({ regDate: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}` }),
				cmds: message.message_id
			}

			stats.users_today = stats.users_today.length;

			return message.send(`
📊<b> Статистика проекта:</b>\n
👨‍💻 Пользователей в игре: ${stats.users}
👨‍💻 Пользователей сегодня: ${stats.users_today}
📥 Инвестировано всего: ${Math.round(s.ref+21000)}₽
📤 Выплачено всего: ${Math.round(s.fc+6000)}₽
🕐 Старт бота произведен 23.08.2022
`, {
				parse_mode: "HTML",
				reply_markup: {
					inline_keyboard: [
					    [{ text: "🚀 Хочу такого-же бота!", url: "https://t.me/asik_prog" }],
            [{ text: "👨‍💻 Владелец", url: "https://t.me/Licifersss" }],
						[{ text: "👨🏻‍⚖️ Аукцион", url: "https://t.me/auction_iphone" }, { text: "💬 Чат", url: "https://t.me/chatsanandreas" }],
						[{ text: "♻️ Пополнения и выводы", url: "https://t.me/payments_bota" }, { text: "🔰Сюжет проекта", url: "https://t.me/sushetsanandreas" }],
						[{ text: "❓ Помощь", callback_data: "help_main" },{ text: "Пиар чат💎", url: "https://t.me/x_n_piar" }],
						[{ text: "🥇 Топ инвесторов", callback_data: "topVip" }, { text: "📤 Топ выводов", callback_data: "topInv" }],
                        [{ text: "🏆 Топ рефоводов", callback_data: "topRef" }, { text: "💻Топ по доходу", callback_data: "topCol" }],
					]
				}
			});
		}
		if (message.text == '📋 Назад') {
			return message.send(`Вы в главном меню. Выберите действие:
`, {
				parse_mode: "HTML",
		     reply_markup: {
		          keyboard: Start,
		          resize_keyboard: true,
		     }
		})
	}
     
     if (message.text == '🔑 Клады') {
			return message.send(`Вперед за новыми преключениями.....
`, {
				parse_mode: "HTML",
		     reply_markup: {
		          keyboard: Klad,
		          resize_keyboard: true,
		     }
		})
	}
		if (state[uid] == 8877) {
			var sum = Number(message.text)
			if (isNaN(sum)) return message.send(`Введите число:`, { parse_mode: "HTML" });
			if (sum < 50) return message.send(`Введите число более 50:`, { parse_mode: "HTML" });
			if (sum > message.user.game_balance) return message.send(`На Вашем игровом балансе недостаточно средств:`, { parse_mode: "HTML" });
			state[uid] = undefined
			var field
			var arr = randomizeArr(randomizeArr([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0]))
			field = [
				[arr[0], arr[1], arr[2], arr[3]],
				[arr[4], arr[5], arr[6], arr[7]],
				[arr[8], arr[9], arr[10], arr[11]],
				[arr[12], arr[13], arr[14], arr[15]],
			]
			await User.findOneAndUpdate({ id: uid }, { data: JSON.stringify(field), $inc: { game_balance: -sum, game_limit: -1, game_bet: sum }, bank: sum })

			return bot.sendMessage(message.chat.id, `<b>💣 Минное поле</b>\n
▫️ Всего на поле 6 мин
▫️ Минимальная сумма входа - 50₽ 
▫️ С каждым открытием пустой клетки начисляется +2% от суммы входа
▫️ Ваш баланс для вывода:  ${message.user.outbalance.toFixed(0)}₽
▫️ Откроете все пустые клетки - получите случайный приз:
Морта ▫️ Мейсона ▫️ 10₽ ▫️ 20₽ ▫️ 35₽ ▫️ 40₽\n
💰 <b>Банк игры:</b> ${roundPlus(sum)}₽\n
👇 <b>Выберете клетку для хода:</b>
		`, {
				parse_mode: "HTML",
				reply_markup: {
					inline_keyboard: [
						[{ text: "❓", callback_data: "gameBomb_0,0" }, { text: "❓", callback_data: "gameBomb_0,1" }, { text: "❓", callback_data: "gameBomb_0,2" }, { text: "❓", callback_data: "gameBomb_0,3" }],
						[{ text: "❓", callback_data: "gameBomb_1,0" }, { text: "❓", callback_data: "gameBomb_1,1" }, { text: "❓", callback_data: "gameBomb_1,2" }, { text: "❓", callback_data: "gameBomb_1,3" }],
						[{ text: "❓", callback_data: "gameBomb_2,0" }, { text: "❓", callback_data: "gameBomb_2,1" }, { text: "❓", callback_data: "gameBomb_2,2" }, { text: "❓", callback_data: "gameBomb_2,3" }],
						[{ text: "❓", callback_data: "gameBomb_3,0" }, { text: "❓", callback_data: "gameBomb_3,1" }, { text: "❓", callback_data: "gameBomb_3,2" }, { text: "❓", callback_data: "gameBomb_3,3" }],
						[{ text: "💰 Забрать банк", callback_data: "gameBombCollect" },],
					]
				}
			});
		}


	if (ADMINS.indexOf(message.from.id) !== -1) {
		if (message.text == '🔝 Админка') {
			var h = process.uptime() / 3600 ^ 0
			var m = (process.uptime() - h * 3600) / 60 ^ 0
			var s = process.uptime() - h * 3600 - m * 60 ^ 0
			var heap = process.memoryUsage().rss / 1048576 ^ 0
			var b = (await User.findOne({ id: 0 })).deposit
			var limit = (await User.findOne({ id: 0 })).bhivebalance

			return qiwi.getBalance(async (err, balance) => {
				
				require('request')({
					method: 'POST',
					url: 'https://payeer.com/ajax/api/api.php?getBalance',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: `account=${config.payeer.account}&apiId=${config.payeer.apiId}&apiPass=${config.payeer.apiPass}&action=getBalance`
				}, async function (error, response, body2) {
					body2 = JSON.parse(body2)
					console.log(body2)
					bot.sendMessage(uid, '<b>Админ-панель:</b>\n\n<b>Аптайм бота:</b> ' + h + ' часов ' + m + ' минут ' + s + ' секунд\n<b>Пользователей в боте: </b>' + (await User.countDocuments({})) + '\n<b>Памяти использовано:</b> ' + heap + "МБ\n<b>Заявок на вывод:</b> " + await Ticket.countDocuments() + "\n<b>Баланс QIWI:</b> " + balance.accounts[0].balance.amount + `₽\n<b>Баланс Payeer:</b> ${body2.balance.RUB.available}₽\n<b>Бонус к пополнению:</b> ` + b + "%\n<b>Лимит на Персонажев: </b>" + limit + " едниниц", { parse_mode: "HTML", reply_markup: RM_admin })

				})
			})
			
				
		}

		if (message.text.startsWith('/setbuybalance')) {
			let cmd = message.text.split(' ');
			if (!cmd[1]) return message.send('Ошибка!');

			let user = await User.findOne({ id: Number(cmd[1]) });
			if (!user) return message.send('Пользователь не найден!');

			await user.set('buybalance', Number(cmd[2]));
			return message.send('Баланс установлен.');
		}

		if (message.text.startsWith('/setqiwi')) {
			var str = message.text.split(' ');
			var number = str[1]
			var token = str[2]
			if (number.indexOf("+") == -1) return message.send('Введите номер с +');
			if (token.length < 10) return message.send('Введите корректный токен');
			fs.writeFileSync("./Bqiwi.txt", number + " " + token, { encoding: "utf8" })
			message.send('QIWI обновлён! Перезапуск бота...');
			setTimeout(() => { process.exit(0) }, 333);
		}

		if (message.text.startsWith('/setoutbalance')) {
			let cmd = message.text.split(' ');
			if (!cmd[1]) return message.send('Ошибка!');

			let user = await User.findOne({ id: Number(cmd[1]) });
			if (!user) return message.send('Пользователь не найден!');

			await user.set('outbalance', Number(cmd[2]));
			return message.send('Баланс установлен.');
		}

	}
});

bot.on('callback_query', async (query) => {
	const { message } = query;
	if (~query.data.indexOf("auction")) return
	message.user = await User.findOne({ id: message.chat.id });
	var uid = message.chat.id
	let dt = new Date
	console.log("[" + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + "] Пользователь " + uid + " отправил колбэк: " + query.data)

	if (!message.user) return bot.answerCallbackQuery(query.id, 'Что-то пошло не так...', true);

	if (query.data == 'none') return bot.answerCallbackQuery(query.id, 'Привет мой друг! :)', true);
	
	if (query.data.startsWith('Caccept') && !message.user.contract) {
		message.user.trees.push({ id: 0, date: Date.now(), lastCollect: Date.now(), health: trees[0].health  });
		message.user.contract = true
		message.user.lastCollect = Date.now()
		await message.user.save();
		bot.deleteMessage(message.chat.id, message.message_id)
		bot.sendPhoto(message.chat.id, `c0.png`, { caption: `✅ Вы приняли пользовательское соглашение и получили Чайку "Флинт"`, parse_mode: "HTML", })
	}

	if (query.data.startsWith('trees:shop')) {
		var limit = (await User.findOne({ id: 0 })).bhivebalance
		let id = Number(query.data.split('trees:shop')[1]);
		var maxId = 0
		message.user.trees.map((t) => { if (t.id > maxId) maxId = t.id })
		let tree = trees.find((x) => x.id == id);

		var treesWithEqualId = 0
		message.user.trees.map((t) => { if (t.id == id) treesWithEqualId++ })

		if (id <= maxId + 1) {
			if (treesWithEqualId < limit)
				var bbtn = [{ text: `➕ Купить за ${tree.price}₽`, callback_data: `trees:buy${tree.id}` }]
			else var bbtn = [{ text: `🛑 Вы достигли лимита в ${limit} Персонажев`, callback_data: getNavigationQuery(id + 1, tree.id) }]

		}
		else
			var bbtn = [{ text: `◀️ Сперва купите предыдущего Персонажа`, callback_data: getNavigationQuery(id - 1, tree.id) }]

		if (!tree) return bot.answerCallbackQuery(query.id, 'Что-то пошло не так...', true);

		bot.deleteMessage(message.chat.id, message.message_id)
		bot.sendPhoto(message.chat.id, `c${tree.id}.png`, {
			caption: `<b>${tree.name}</b>
		
💰 Стоимость: ${tree.price}₽
🛡️  Coins в час: ${tree.earn}`, parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [[
					{ text: getInventoryIcon(0, tree.id), callback_data: getNavigationQuery(0, tree.id) },
					{ text: getInventoryIcon(1, tree.id), callback_data: getNavigationQuery(1, tree.id) },
					{ text: getInventoryIcon(2, tree.id), callback_data: getNavigationQuery(2, tree.id) },
					{ text: getInventoryIcon(3, tree.id), callback_data: getNavigationQuery(3, tree.id) },
					{ text: getInventoryIcon(4, tree.id), callback_data: getNavigationQuery(4, tree.id) }, 
					{ text: getInventoryIcon(5, tree.id), callback_data: getNavigationQuery(5, tree.id) },
					{ text: getInventoryIcon(6, tree.id), callback_data: getNavigationQuery(6, tree.id) }, 
					{ text: getInventoryIcon(7, tree.id), callback_data: getNavigationQuery(7, tree.id) }], 
					[{ text: getInventoryIcon(8, tree.id), callback_data: getNavigationQuery(8, tree.id) }], 

			        bbtn
				]
			}
		})
	}
	
	if (query.data.startsWith('malBuy')) {
		if (message.user.buybalance < 1000) return bot.answerCallbackQuery(query.id, `❌ На Вашем балансе для покупок недостаточно средств что бы купить Героя`, true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -1000 } })
		bot.deleteMessage(message.chat.id, message.message_id)
		await Tamagochi.insertMany([{
			creator_id: uid,
			start_time: (new Date()).getTime(),
			sick: false,
			sickTime: 0,
			lastFeed: (new Date()).getTime(),
			lastClean: (new Date()).getTime()
		}])
		return bot.answerCallbackQuery(query.id, `🧱 Вы успешно купили Героя!`, true);
	}

	if (query.data.startsWith('malMy')) {
		var par = query.data.split("malMy")[1]
		var now = (new Date()).getTime()
		if (par == "feed") {
			await Tamagochi.findOneAndUpdate({ creator_id: uid }, { lastFeed: now })
			await bot.answerCallbackQuery(query.id, `🌽 Вы покормили Героя!`, true);
		}
		else if (par == "clean") {
			await Tamagochi.findOneAndUpdate({ creator_id: uid }, { lastClean: now })
			await bot.answerCallbackQuery(query.id, `💩 Вы убрали Район!`, true);
		}
		else if (par == "heal") {
			if (message.user.buybalance < 50) return bot.answerCallbackQuery(query.id, `❌ На Вашем балансе для покупок недостаточно средств для лечения  Герои` ,true);
			await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -50 } })
			await Tamagochi.findOneAndUpdate({ creator_id: uid }, { sick: false, sickTime: 0, lastClean: now, lastFeed: now })
			await bot.answerCallbackQuery(query.id, `❤️ Вы вылечили Героя!`, true);
		}
		var mal = await Tamagochi.findOne({ creator_id: uid })

		bot.deleteMessage(message.chat.id, message.message_id)

		if (!mal.sick) {
			var reply_markup = {
				inline_keyboard: [
					[{ text: "🌽 Покормить Героя", callback_data: "malMyfeed" }],
					[{ text: "💩 Убрать Район", callback_data: "malMyclean" }],
					[{ text: "🔄 Обновить", callback_data: "malMy" }]]
			}
			return bot.sendMessage(uid, `
<b>🐠 Ваш Герой:</b>\n
💙 Прожил <b>${Math.ceil((now - mal.start_time) / (1000 * 60 * 60 * 24))}</b> из <b>30</b> дней
🌽 Нужно успеть покормить за <b>${Math.floor((mal.lastFeed + 1000 * 12 * 60 * 60 - now) / (1000 * 60 * 60))} часов</b>
💩 Нужно успеть убрать за <b>${Math.floor((mal.lastClean + 1000 * 24 * 60 * 60 - now) / (1000 * 60 * 60))} часов</b>
💰 <b>Стоимость:</b> ${1000 + (Math.ceil((now - mal.start_time) / (1000 * 60 * 60 * 24)) - 1) * 10} рублей
					`, {
				reply_markup, parse_mode: "html"
			})
		} else {
			var reply_markup = { inline_keyboard: [[{ text: "❤️ Вылечить гнома", callback_data: "malMyheal" }]] }

			return bot.sendMessage(uid, `
<b>🧱 Ваш Герой болен!</b>\n
❤️ Он умрёт, если Вы не вылечите его за <b>${Math.floor((mal.sickTime + 1000 * 12 * 60 * 60 - now) / (1000 * 60 * 60))} часов</b>
💰 <b>Стоимость лечения:</b> 50 рублей
					`, {
				reply_markup, parse_mode: "html"
			})
		}
	}
	if (query.data.startsWith('malFeed')) {
		await Tamagochi.findOneAndUpdate({ creator_id: uid })

	}
	

	if (query.data.startsWith('topInv')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var top = await User.find({ id: { $ne: 0, $ne: 1 } }).sort({ deposit: -1 }).limit(40)
		var c = 0
		return bot.sendMessage(uid, `<b>🏁 Топ 40 инвесторов:</b>\n\n${top.map((e) => { c++; return `<b>${c})</b> <a href="tg://user?id=${e.id}">${e.name ? e.name : "пользователь"}</a> - <b>${e.deposit}₽</b>` }).join("\n")}`, { parse_mode: "html" });
	}
	
	if (query.data.startsWith('topVivod')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var top = await User.find({ id: { $ne: 0, $ne: 1 } }).sort({ payout: -1 }).limit(40)
		var c = 0
		return bot.sendMessage(uid, `<b>📤 Топ 40 по выводам:</b>\n\n${top.map((e) => { c++; return `<b>${c})</b> <a href="tg://user?id=${e.id}">${e.name ? e.name : "пользователь"}</a> - <b>${e.payout}₽</b>` }).join("\n")}`, { parse_mode: "html" });
	}

	if (query.data.startsWith('topRef')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var top = await User.find({ id: { $ne: 0, $ne: 1 } }).sort({ refCount: -1 }).limit(40)
		var c = 0
		return bot.sendMessage(uid, `<b>🏁 Топ 40 рефоводов:</b>\n\n${top.map((e) => { c++; return `<b>${c})</b> <a href="tg://user?id=${e.id}">${e.name ? e.name : "пользователь"}</a> - <b>${e.refCount}</b> рефералов` }).join("\n")}`, { parse_mode: "html" });
	}
	
	if (query.data.startsWith('topCol')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var top = await User.find({ id: { $ne: 0, $ne: 1 } }).sort({ totalEarn: -1 }).limit(40)
		var c = 0
		return bot.sendMessage(uid, `<b>💻Топ 40 по доходу:</b>\n\n${top.map((e) => { c++; return `<b>${c})</b> <a href="tg://user?id=${e.id}">${e.name ? e.name : "пользователь"}</a> - <b>${e.totalEarn}💀</b>` }).join("\n")}`, { parse_mode: "html" });
	}

	if (query.data.startsWith('help_main')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		return bot.sendMessage(uid, 'Здесь находятся ответы на часто задаваемые вопросы, выберите одну из тем, которая вас интересует:', {
			reply_markup: {
				inline_keyboard: [
					[{ text: "👥 Рефералы", callback_data: "help_refs" },
					{ text: "🔰 Персонажи", callback_data: "help_bogs" }],
					[{ text: "📤 Вывод", callback_data: "help_po" },
					{ text: "💳 Пополнение", callback_data: "help_pi" }],]
			}
		})
	}

	if (query.data.startsWith('help_refs')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		return bot.sendMessage(uid, '👥 <b>Рефералы</b>\n\nРефералы – это игроки, с регистрации которых в боте вы получаете 0.25₽, а также 10% от пополнений: по 5% на балансы для покупок и вывода\n\nДля привлечения большего числа пользователй, Вам нужно как можно активнее распространять свою парнёрскую ссылку другим пользователям\nИндивидуальную реферальную ссылку можно получить в разделе «👥 Рефералы»', { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "help_main" }]] } })
	}
	if (query.data.startsWith('help_bogs')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		return bot.sendMessage(uid, ' 🛡️ <b>🔰 Персонажи</b>\n\🔰 Персонажи - это существа, которые будут будут приносить Вам доход в виде  🛡️  Защиты, которые можно обменять на деньги\nДля сбора  Защиты, зайдите в раздел «🔰 Персонажи» -> Мои Персонажи,\nДля обмена  Защиты на рубли зайдите в раздел «♻️ Обмен» и произведите обмен', { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "help_main" }]] } })
	}
	if (query.data.startsWith('help_po')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		return bot.sendMessage(uid, '📤 <b>Вывод денег</b>\n\nМинимальный вывод средств из игры: <b>10₽</b>\nЧтобы вывести средства, зайдите в раздел «🖥 Личный кабинет» ->  Вывести\n\nДеньги можно вывести на QIWI и PAYEER', { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "help_main" }]] } })
	}
	if (query.data.startsWith('help_pi')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		return bot.sendMessage(uid, '💳 <b>Пополнение</b>\n\nДля пополнения в бота зайдите в раздел «🖥 Личный кабинет» -> Пополнить\nДеньги зачисляются в течение 30 секунд\n\nТакже помните, что в комментарии к переводу надо указывать букву M английскую, а не русскую, иначе Ваш баланс не пополнится', { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "help_main" }]] } })
	}
	
	if (query.data == 'prud') {
		bot.deleteMessage(message.chat.id, message.message_id)
		var reply_markup = { inline_keyboard: [[{ text: `🔼 Повысить уровень до ${message.user.prudLevel + 1} за ${prudLevelPrices[message.user.prudLevel + 1]} рубинов`, callback_data: `prudUpLevel` }]] }
		if (message.user.prudLevel >= 5) reply_markup = null
		return bot.sendMessage(uid, `
💰 <b>Ваш тайник:</b>\n
🎚 <b>Уровень Вашего тайника:</b> ${message.user.prudLevel}
📈 <b>Доход больше на ${roundPlus((getMultiplierOfLevel(message.user.prudLevel) - 1) * 100)}%</b>\n
❗️ <i>Каждый уровень даёт дополнительные 2% к доходу</i>
`, {
			parse_mode: "html",
			reply_markup
		})
	}

	if (query.data.startsWith('prudUpLevel')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var price = prudLevelPrices[message.user.prudLevel + 1]
		if (message.user.prudLevel >= 5) return bot.answerCallbackQuery(query.id, `❌ Вы достигли максимального уровня улучшения тайника!`, true)
		if (price > message.user.buybalance) return bot.answerCallbackQuery(query.id, `❌ На Вашем балансе для покупок недостаточно средств!`, true)
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -price, prudLevel: 1 } })
		return bot.answerCallbackQuery(query.id, `🔼 Вы успешно повысили уровень своего тайника до ${message.user.prudLevel + 1} за ${price} рубинов!`, true)
	}
	
	if (query.data == 'takeklad') {
		if (message.user.outbalance < 2) return bot.answerCallbackQuery(query.id, '❌ На Вашем балансе вывода  недостаточно средств!', true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: -3 } })
		var arr = randomizeArr([0, 1, 2, 3, 4, 5, 2, 1, 3, 0, 4])
		await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: arr[5] } })
		bot.sendMessage("@news_botov", `💣 <a href="tg://user?id=${message.chat.id}">Пользователь</a> взорвал стену и открыл клад с призом <b>${arr[5]} рублей на вывод</b>`,{parse_mode: "HTML" })
		await bot.answerCallbackQuery(query.id, `💣 Вы взорвали стену и получили: <b>${arr[5]} рублей на вывод</b>` , true) 
            parse_mode: "HTML",
			reply_markup
		}
	
	if (query.data == 'promoact') {
		 state[uid] = 11000
		 return bot.sendMessage(message.chat.id, `<b>Введите ваш промокод:</b>`, {parse_mode: "HTML"})
	 }

	if (query.data.startsWith('store')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		return bot.sendMessage(uid, 'Магазин:', {
			reply_markup: {
				inline_keyboard: [
					[{ text: "🔰 Персонажи", callback_data: "trees:shop0" }],
				]
			}
		});

	}
	
	if (query.data == 'dep') {
		var b = (await User.findOne({ id: 0 })).deposit
			var br = (await User.findOne({ id: 0 })).payout
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `Выберите способ пополнения`, {
			parse_mode: "HTML",
			reply_markup: {
			     inline_keyboard: [
			          [{ text: `🥝 QIWI + ${b}%` , callback_data: "deposit_qiwi" }, { text: `🅿️ PAYEER + ${br}%` , callback_data: "deposit_payeer" }],
			          ]
			}

		});
	}

	if (query.data == 'deposit_qiwi') {
		bot.deleteMessage(message.chat.id, message.message_id);

		var b = (await User.findOne({ id: 0 })).deposit
		if (b == 0) var bt = ""
		else var bt = `\n<b>🔥 Временная акция для остальных пополнений: +${b}% при любом пополнении</b>`
		return bot.sendMessage(message.chat.id, `🥝 <b>Способ пополнения: QIWI</b>
🌐 Отправьте любую сумму на кошелек <code>+996705263660</code>
❗️ Не забудьте комментарий <code>ml${message.chat.id}</code>

📥 <b>Для пополнения с помощью других способов обращайтесь к администратору</b> @Licifersss\n
${bt}`, {
			parse_mode: "HTML",
			reply_markup: {
			     inline_keyboard: [
			          [{ text: "🥝 Перейти к пополнению", url: "https://qiwi.com/p/996705263660" }],
			[{ text: "◀️ Назад", callback_data: "dep" }],
			          ]
			}

		});
	}
	
	if (query.data == 'deposit_payeer') {
		bot.deleteMessage(message.chat.id, message.message_id);

		var br = (await User.findOne({ id: 0 })). payout
		if (br == 0) var bt = ""
		else var bt = `\n<b>🔥 Временная акция для остальных пополнений: +${br}% при любом пополнении</b>`
		return bot.sendMessage(message.chat.id, `🅿️ <b>Способ пополнения: Payeer</b>
🌐 Отправьте любую сумму на кошелек <code>${config.payeer.account}</code>
❗️ Не забудьте комментарий <code>ml${message.chat.id}</code>

📥 <b>Для пополнения с помощью других способов обращайтесь к администратору</b> @Licifersss\n
${bt}`, {
			parse_mode: "HTML",
			reply_markup: {
			     inline_keyboard: [
			          [{ text: "◀️ Назад", callback_data: "dep" }],
			          ]
			}

		});
	}
	
	if (query.data == 'withdrawi') {
		if (message.user.game_balance < 0) return bot.answerCallbackQuery(query.id,'🚫 Вы еще не делали инвестиций', true);
		if (message.user.outhbalance < 17) return bot.answerCallbackQuery(query.id,'🚫 Минимальная сумма вывода: 17₽', true);
		bot.deleteMessage(message.chat.id, message.message_id);
		
		await message.user.set('menu', 'qiwi');
		await bot.sendMessage(message.chat.id, `ведите номер QIWI кошелька  или PAYEER для вывода:\nНапример: +996705263660, P10600567000`, {
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}

	if (query.data == 'reinvesti') {
		await message.user.set('menu', 'reinvesti');
		bot.deleteMessage(message.chat.id, message.message_id);
		var br = (await User.findOne({ id: 0 })). payout
		var str = ""
		if (br > 0) str = `🔥 <b>Временная акция: +${br}% - бонус к реинвесту</b>\n\n`
		return bot.sendMessage(message.chat.id, `${str}👉 Введите сумму, которую хотите реинвестировать:`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}
	
	if (query.data == 'buy_invest') {
		bot.deleteMessage(message.chat.id, message.message_id);
		var bi = (await User.findOne({ id: 0 })). fetuses
		var str = ""
		if (bi > 0) str = `🔥 <b>Временная акция: +${bi}% - бонус к инвестиции</b>\n\n`
		state[uid] = 13
		return bot.sendMessage(message.chat.id, `
<b>📭 Ваш баланс:</b> ${message.user.game_balance}₽\n
<b>${str}👉 Введите сумму для открытия вклада:</b>
`, {
			parse_mode: "HTML", 
				reply_markup: {
					keyboard: Cancel,
					resize_keyboard: true
				}
			
		})
	}
	
	if (query.data == 'kredit_invest') {
		bot.deleteMessage(message.chat.id, message.message_id);
		state[uid] = 133
		return bot.sendMessage(message.chat.id, `
<b>📭 Ваш баланс кредита:</b> ${message.user.kredit_balance}₽\n
<b>👉 Введите сумму для открытия вклада:</b>
`, {
			parse_mode: "HTML", 
				reply_markup: {
					keyboard: Cancel,
					resize_keyboard: true
				}
			
		})
	}
	
	if (query.data == 'sbor_invest') {
		bot.deleteMessage(message.chat.id, message.message_id);
		var bs = (await User.findOne({ id: 0 })). outbalance
		var str = ""
		if (bs > 0) str = `🔥 <b>Временная акция: +${bs}% - бонус к выводу инвестиций</b>\n\n`
		state[uid] = 14
		return bot.sendMessage(message.chat.id, `
<b>📭 Ваши накопления:</b> ${message.user.accumulation_balance}₽\n
<b>${str}👉 Введите сумму, которую хотите вывести с накоплений:</b>
`, {
			parse_mode: "HTML", 
				reply_markup: {
					keyboard: Cancel,
					resize_keyboard: true
				}
			
		})
	}

	if (query.data.startsWith('wildBees')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var reply_markup = { inline_keyboard: [] }
		var wb = await WildBee.find({ creator_id: uid })
		wb.map((b) => { reply_markup.inline_keyboard.push([{ text: `🐧 Супер Персонаж ${b.level} уровня`, callback_data: "wb_" + b._id }]) })
		reply_markup.inline_keyboard.push([{ text: `➕ Собрать ${message.user.wb_profits}  🛡️`, callback_data: "wbCollect" }])
		reply_markup.inline_keyboard.push([{ text: "◀️ Назад", callback_data: "store" }])
		return bot.sendMessage(uid, `🐧 Персонажи могут появится только благодаря фабрике\n
<b>Для Персонажей доступно 5 уровней улучшения:</b>\n
Уровень |  Защиты в час | Стоимость улучшения
1 уровень - 33  🛡️ 
2 уровень - 340  🛡️ - 120₽
3 уровень - 618  🛡️ - 400₽
4 уровень - 982  🛡️ - 500₽
5 уровень - 2200  🛡️ - 2000₽
6 уровень - 4978  🛡️ - 3000₽
7 уровень - 7470  🛡️ - 4000₽
8 уровень - 23027  🛡️ - 7000₽
<b>Ваши персонажи:</b>`, {
			reply_markup, parse_mode: "html"
		});
	}

	if (query.data.startsWith('wbCollect')) {
		if (message.user.wb_profits == 0)
			return bot.answerCallbackQuery(query.id, '🐧 Ваши персонажи пока не принесли дохода!', true);
		else {
			bot.deleteMessage(message.chat.id, message.message_id)
			await User.findOneAndUpdate({ id: uid }, { wb_profits: 0 })
			await message.user.inc('fetuses', message.user.wb_profits)
			return bot.answerCallbackQuery(query.id, `🐧 Вы успешно собрали ${message.user.wb_profits}  🛡️`, true);
		}
	}

	if (query.data.startsWith('wbUpLevel_')) {
		var wb = await WildBee.findOne({ _id: query.data.split("_")[1] })
		var price = wbPrices[wb.level + 1]
		if (message.user.buybalance < price) return bot.answerCallbackQuery(query.id, `❌ На Вашем балансе для покупок недостаточно средств для улучшения`, true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -price } })
		await WildBee.findOneAndUpdate({ _id: String(wb._id) }, { level: wb.level + 1 })
		bot.deleteMessage(message.chat.id, message.message_id)
		wb.level++
		var reply_markup = { inline_keyboard: [] }
		if (wb.level < 8)
			reply_markup.inline_keyboard.push([{ text: `🔼 Купить ${wb.level + 1} уровень за ${wbPrices[wb.level + 1]}₽`, callback_data: `wbUpLevel_` + wb._id }])
		reply_markup.inline_keyboard.push([{ text: "◀️ Назад", callback_data: "wildBees" }])
		bot.sendPhoto(message.chat.id, "sfix.jpg", {
			caption: `
🐧 <b>Персонаж ${wb.level} уровня</b> \n
🕒 <b>В зоопарке:</b> ${Math.floor((Date.now() - wb.start_time) / (1000 * 60 * 60 * 24))} дней
 🛡️ <b> Coins в час:</b> ${wbProfits[wb.level]}
💰 <b>Принёс  Coins</b>: ${ wb.bee_profit}`, parse_mode: "HTML", reply_markup
		})
		return bot.answerCallbackQuery(query.id, `🔼 Уровень персонажа повышен до ${wb.level} за ${price}₽`, true);

	}

	if (query.data.startsWith('wb')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var wb = await WildBee.findOne({ _id: query.data.split("_")[1] })
		var reply_markup = { inline_keyboard: [] }
		if (wb.level < 8)
			reply_markup.inline_keyboard.push([{ text: `🔼 Купить ${wb.level + 1} уровень за ${wbPrices[wb.level + 1]}₽`, callback_data: `wbUpLevel_` + wb._id }])
		reply_markup.inline_keyboard.push([{ text: "◀️ Назад", callback_data: "wildBees" }])
		bot.sendPhoto(message.chat.id, "sfix.jpg", {
			caption: `
🐧 <b>Персонаж ${wb.level} уровня</b> \n
🕒 <b>На прогулке:</b> ${Math.floor((Date.now() - wb.start_time) / (1000 * 60 * 60 * 24))} дней
 🛡️ <b> Coins в час:</b> ${wbProfits[wb.level]}
💰 <b>Coins  Защиты</b>: ${ wb.bee_profit}`, parse_mode: "HTML", reply_markup
		})
	}

	if (query.data == ('beeMother')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		console.log(await User.findOne({ id: 1 }))
		var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
		var reply_markup = {
			inline_keyboard: [
			]
		}
		var ubm = await BeeMother.findOne({ creator_id: message.user.id })
		if (ubm != null) {
			var now = new Date()
			var ttl = Math.floor((ubm.end_time - now.getTime()) / (1000 * 60 * 60 * 24))
			var str = `<b>⚜️ Ваша фабрика:</b>\n
🕐 Осталось <b>${ttl}</b> дней
🐯 Принесла <b>${ubm.beesGet}</b> из <b>4</b> персонажа
`
		}

		else if (!bm.status) var str = '<b>❌ Фабрика недоступна</b>'
		else {
			var str = `<b>✅ Фабрика доступна!</b>\n💸 Стоимость: <b>${bm.price} рублей</b>\n🛒 Куплено <b>${bm.bought}</b> из <b>${bm.count}</b>`
			reply_markup.inline_keyboard.push([{ text: "🛒 Купить фабрику", callback_data: "beeMotherBuy" }])
		}
		reply_markup.inline_keyboard.push([{ text: "◀️ Назад", callback_data: "store" }])
		return bot.sendMessage(uid, `
<b>⚜️ Покупка персонажа:</b>
❗️️️ Персонаж - герои телефоны,благодаря которым легком поднять денег
🏦 Ваш баланс для покупок: <b>${message.user.buybalance} рублей</b>
⚜️ Персонажи появляется и исчезает с продажи когда угодно!
⚰️ Срок работы фабрики - 30 дней!
🐯 Фабрика за период своей жизни приносит 4 персонажа!\n\n${str}`, {
			reply_markup, parse_mode: "html"
		});

	}

	if (query.data == ('beeMotherBuy')) {
		var bm = JSON.parse((await User.findOne({ id: 1 })).menu)

		if (!bm.status) return bot.answerCallbackQuery(query.id, '❌ Фабрика недоступна!', true);
		if (message.user.buybalance < bm.price) return bot.answerCallbackQuery(query.id, '❌ На Вашем балансе для покупок недостаточно средств!', true);
		bot.deleteMessage(message.chat.id, message.message_id)

		await User.findOneAndUpdate({ id: message.chat.id }, { $inc: { buybalance: -bm.price } })
		var now = new Date()
		now.setDate(now.getDate() + 7)
		var nextBeeGet = now.getTime()
		now.setDate(now.getDate() + 24)
		var end_time = now.getTime()
		await BeeMother.insertMany([{ creator_id: message.chat.id, beesGet: 0, nextBeeGet, end_time }])
		bm.bought++
		if (bm.bought >= bm.count) bm.status = false
		await User.findOneAndUpdate({ id: 1 }, { menu: JSON.stringify(bm) })
		return bot.sendMessage(uid, `
<b>⚜️ Вы успешно приобрели фабрику!</b>`, {
			reply_markup, parse_mode: "html"
		});

	}

	if (query.data.startsWith('trees:inv')) {
		let id = Number(query.data.split('trees:inv')[1]);

		let tree = trees.find((x) => x.id == id);
		if (!tree) return bot.answerCallbackQuery(query.id, 'Что-то пошло не так...', true);

		let total_balance = 0;

		message.user.trees.map((x) => {
			total_balance += (((Date.now() - message.user.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60);
		});

		let count = message.user.trees.filter((x) => x.id == tree.id).length;

		let earn = count * tree.earn;

		bot.deleteMessage(message.chat.id, message.message_id)

		bot.sendPhoto(message.chat.id, `c${tree.id}.png`, {

			caption: `<b>${tree.name}</b> (${count}x)
		
💰 Стоимость: ${tree.price}₽
 🛡️  Coins в час: ${earn}`, parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [[
					{ text: getInventoryIcon(0, tree.id), callback_data: getInventoryQuery(0, tree.id) },
					{ text: getInventoryIcon(1, tree.id), callback_data: getInventoryQuery(1, tree.id) },
					{ text: getInventoryIcon(2, tree.id), callback_data: getInventoryQuery(2, tree.id) },
					{ text: getInventoryIcon(3, tree.id), callback_data: getInventoryQuery(3, tree.id) },
					{ text: getInventoryIcon(4, tree.id), callback_data: getInventoryQuery(4, tree.id) },
					{ text: getInventoryIcon(5, tree.id), callback_data: getInventoryQuery(5, tree.id) },
					{ text: getInventoryIcon(6, tree.id), callback_data: getInventoryQuery(6, tree.id) },
					{ text: getInventoryIcon(7, tree.id), callback_data: getInventoryQuery(7, tree.id) },], 
					[{ text: getInventoryIcon(8, tree.id), callback_data: getInventoryQuery(8, tree.id) },], 
				[{ text: `➕ Собрать ${total_balance.toFixed(2)} 🛡️`, callback_data: `trees:collect` }]
				]
			}
		})

	}

	if (query.data.startsWith('trees:buy')) {
		let total_balance = 0;
		console.log(message.user.trees)
		message.user.trees.map((x) => {
			if ((((Date.now() - message.user.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60) > (trees.find((a) => a.id == x.id).earn * 72)) {
				total_balance += trees.find((a) => a.id == x.id).earn * 72;
			} else {
				total_balance += (((Date.now() - message.user.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60);
			}
		});


		let id = Number(query.data.split('trees:buy')[1]);

		let tree = trees.find((x) => x.id == id);
		if (!tree) return bot.answerCallbackQuery(query.id, 'Что-то пошло не так...', true);

		if (tree.price > message.user.buybalance) return bot.answerCallbackQuery(query.id, '🚫 Недостаточно денег для покупки.', true);
		else if (tree.price <= message.user.buybalance) {
			var limit = (await User.findOne({ id: 0 })).bhivebalance

			var treesWithEqualId = 0
			message.user.trees.map((t) => { if (t.id == id) treesWithEqualId++ })

			if (treesWithEqualId >= limit)
				return bot.answerCallbackQuery(query.id, `🛑 Вы достигли лимита в ${limit} персонажа данного уровня`, true);

			//await message.user.dec('buybalance', tree.price);

			await message.user.set('lastCollect', Date.now());
			await message.user.inc('fetuses', Number(total_balance.toFixed(2)));

			await message.user.trees.push({ id: tree.id, date: Date.now(), lastCollect: Date.now(), health: tree.health  });
			await message.user.save();
			await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -tree.price } })


			return bot.answerCallbackQuery(query.id, `✅ Вы успешно приобрели ${tree.name} за ${tree.price}₽`, true);
		}
	}

	if (query.data == 'exchange') {
		if (message.user.fetuses < 1000) return bot.answerCallbackQuery(query.id, '🚫 Минимальная сумма обмена: 1000  🛡️', true);
		let { fetuses } = message.user;
		await message.user.set('fetuses', 0);
		fetuses = fetuses / 1000;
		await message.user.inc('buybalance', fetuses / 1.42);
		await message.user.inc('outbalance', fetuses / 3.33);
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.answerCallbackQuery(query.id, `✅ Вы успешно обменяли ${(fetuses * 1000).toFixed(2)}  🛡️ на ${fetuses.toFixed(2)}₽`, true);
	}

	if (query.data == 'deposit') {
		bot.deleteMessage(message.chat.id, message.message_id);
        /*                               
		🥝 <b>Способ пополнения: QIWI</b>
		🌐 Отправьте любую сумму на кошелек <code>${config.qiwi.account}</code>
		❗️ Не забудьте комментарий <code>VR${message.chat.id}</code>
		*/
		var b = (await User.findOne({ id: 0 })).deposit
		if (b == 0) var bt = ""
		else var bt = `\n<b>🔥 Временная акция: +${b}% при любом пополнении</b>`

        return bot.sendMessage(message.chat.id, `🥝 <b>Способ пополнения: QIWI</b>
🌐 Отправьте любую сумму на кошелек <code>${qiwistr.split(" ")[0]}</code>
❗️ Не забудьте комментарий <code>GTA${message.chat.id}</code>

💎 <b>Способ пополнения: Payeer</b>
🌐 Отправьте любую сумму на кошелек <code>${config.payeer.account}</code>
❗️ Не забудьте комментарий <code>GTA${message.chat.id}</code>

📥 <b>Для пополнения с помощью других способов обращайтесь к администраторам </b> @Licifersss\n
${bt}`, {
			parse_mode: "HTML",

		});
	}


	if (query.data == 'game_payin') {
		state[uid] = undefined
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `<b>👇 Выберете способ пополнения игрового баланса:</b>`, { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "🥝 QIWI", callback_data: "game_payin_qiwi" }], [{ text: "💎 Payeer", callback_data: "game_payin_payeer" }], [{ text: "📭 Баланс для вывода", callback_data: "game_payin_wb" }],] } })
	}

	if (query.data == 'game_payin_qiwi') {
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `
🥝 <b>Способ пополнения: QIWI</b>
🌐 Отправьте любую сумму на кошелек <code>${qiwistr.split(" ")[0]}</code>
❗️ Не забудьте комментарий <code>ZG${message.chat.id}</code>
`, { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "game_payin" }]] } })
	}

	if (query.data == 'game_payin_payeer') {
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `
💎 <b>Способ пополнения: Payeer</b>
🌐 Отправьте любую сумму на кошелек <code>${config.payeer.account}</code>
❗️ Не забудьте комментарий <code>ZG${message.chat.id}</code>
`, { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "game_payin" }]] } })
	}

	if (query.data == 'game_payin_wb') {
		bot.deleteMessage(message.chat.id, message.message_id);
		state[uid] = 66666
		return bot.sendMessage(message.chat.id, `
<b>📭 Ваш баланс для вывода:</b> ${message.user.outbalance.toFixed(0)}₽\n
<b>👉 Введите сумму для перевода на игровой баланс:</b>
`, {
			parse_mode: "HTML", reply_markup: {
				reply_markup: {
					keyboard: Cancel,
					resize_keyboard: true
				}
			}
		})
	}

	if (query.data == 'game_payout') {
		if (message.user.game_limit > 0) return bot.answerCallbackQuery(query.id, `❗️ Для вывода Вам необходимо сыграть сегодня ещё ${message.user.game_limit} игр в Колесо фортуны или Минное поле!`, true);

		bot.deleteMessage(message.chat.id, message.message_id);
		state[uid] = 66667
		return bot.sendMessage(message.chat.id, `
<b>💰 Ваш игровой баланс:</b> ${roundPlus(message.user.game_balance)}₽\n
<b>👉 Введите сумму для вывода на игровой баланс:</b>
`, {
			parse_mode: "HTML", reply_markup: {
				reply_markup: {
					keyboard: Cancel,
					resize_keyboard: true
				}
			}
		})
	}

	if (query.data == 'game_casino') {
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `<b>🎰 Колесо фортуны</b>\n
Стоимость вращения колеса - <b>100₽</b> с игрового баланса\n
<b>💰 Ваш игровой баланс:</b> ${roundPlus(message.user.game_balance)}₽\n
<b>Вы можете выиграть:</b>
▫️ Морта ▫️ Мейсона ▫️ Шкипера ▫️ Джулиана ▫️ Глорию ▫️ Ещё одна прокрутку ▫️ 5₽ ▫️ 10₽ ▫️ 15₽
	`, {
			parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [
					[{ text: "🎰 Испытать удачу 100₽", callback_data: "game_casino_spin" }],
				]
			}
		});
	}

	if (query.data == 'game_casino_spin') {
		if (message.user.game_balance < 100) return bot.answerCallbackQuery(query.id, '❌ На Вашем игровом балансе недостаточно средств!', true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { game_balance: -100, game_limit: -1 } })
		bot.deleteMessage(message.chat.id, message.message_id);
		var val = randomInteger(1, 9)
		var reply_markup = {
			inline_keyboard: [
				[{ text: "◀️ Назад", callback_data: "game_casino" }],
			]
		}
		if (val <= 5) {
			val--
			var prize = `🐯 Персонажево ${trees.find((a) => a.id == val).name}`
			giveTree(uid, val)
		}
		else if (val == 6) {
			var prize = `♻️ Ещё одну прокрутку`
			await User.findOneAndUpdate({ id: uid }, { $inc: { game_balance: 100 } })
			reply_markup.inline_keyboard[0] = [{ text: "🎰 Испытать удачу", callback_data: "game_casino_spin" }]
		}
		else if (val >= 7) {
			val = roundPlus((val - 6) * 5)
			var prize = `💰 ${val}₽ на игровой баланс`
			await User.findOneAndUpdate({ id: uid }, { $inc: { game_balance: val } })
		}
		return bot.sendMessage(message.chat.id, `🎰 <b>Вы выиграли:</b>\n\n${prize}`, {
			parse_mode: "HTML",
			reply_markup
		});
	}


	if (query.data == 'game_bomb') {
		bot.deleteMessage(message.chat.id, message.message_id);
		state[uid] = 8877
		return bot.sendMessage(message.chat.id, `<b>💣 Минное поле</b>\n
▫️ Всего на поле 6 мин
▫️ Минимальная сумма входа - 50₽ 
▫️ С каждым открытием пустой клетки начисляется +2% от суммы входа
▫️ Ваш игровой баланс: ${roundPlus(message.user.game_balance)}₽
▫️ Откроете все пустые клетки - получите случайный приз:
iphone 1▫️ iphone 2 ▫️ 10₽ ▫️ 20₽ ▫️ 35₽ ▫️ 40₽\n
👉 <b>Введите сумму входа:</b>
	`, {
			parse_mode: "HTML",
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}

	if (query.data == 'gameBombCollect') {
		await bot.answerCallbackQuery(query.id, `💰 Вы забрали банк! Вам начислено ${message.user.bank}₽!`, true);
		bot.deleteMessage(message.chat.id, message.message_id);
		await User.findOneAndUpdate({ id: uid }, { $inc: { game_balance: message.user.bank }, bank: 0 })
	}

	if (~query.data.indexOf('gameBomb')) {
		var field = JSON.parse(message.user.data)
		var coords = query.data.split("_")[1].split(",")
		var box = field[Number(coords[0])][Number(coords[1])]
		if (box == 2) return bot.answerCallbackQuery(query.id, `Вы уже открыли эту клетку!`, true);
		if (message.user.game_balance < message.user.game_bet) return bot.answerCallbackQuery(query.id, `На Вашем игровом балансе недостаточно средств!`, true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { game_balance: -message.user.game_bet, game_limit: -1 } })

		if (box == 1) {
			await bot.answerCallbackQuery(query.id, `💣 Вы попались на мину!`, true);
			bot.deleteMessage(message.chat.id, message.message_id);
			await User.findOneAndUpdate({ id: uid }, { bank: 0 })
			return
		}
		else if (box == 0) {
			bot.deleteMessage(message.chat.id, message.message_id);
			field[Number(coords[0])][Number(coords[1])] = 2
			await User.findOneAndUpdate({ id: uid }, { data: JSON.stringify(field), bank: roundPlus(message.user.bank * 1.02) })
			if (!field.every(line => { return line.every(e => { return e == 2 }) })) {
				bot.sendMessage(message.chat.id, `<b>💣 Минное поле</b>\n
▫️ Всего на поле 6 мин
▫️ Минимальная сумма входа - 50₽ 
▫️ С каждым открытием пустой клетки начисляется +2% от суммы входа
▫️ Ваш игровой баланс: ${roundPlus(message.user.game_balance)}₽
▫️ Откроете все пустые клетки - получите случайный приз:
Морта ▫️ Мейсона ▫️ 10₽ ▫️ 20₽ ▫️ 30₽ ▫️ 40₽\n
💰 <b>Банк игры:</b> ${roundPlus(message.user.bank * 1.02)}₽\n
👇 <b>Выберете клетку для хода:</b>
						`, {
					parse_mode: "HTML",
					reply_markup: {
						inline_keyboard: [
							[{ text: field[0][0] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_0,0" }, { text: field[0][1] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_0,1" }, { text: field[0][2] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_0,2" }, { text: field[0][3] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_0,3" }],
							[{ text: field[1][0] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_1,0" }, { text: field[1][1] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_1,1" }, { text: field[1][2] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_1,2" }, { text: field[1][3] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_1,3" }],
							[{ text: field[2][0] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_2,0" }, { text: field[2][1] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_2,1" }, { text: field[2][2] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_2,2" }, { text: field[2][3] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_2,3" }],
							[{ text: field[3][0] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_3,0" }, { text: field[3][1] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_3,1" }, { text: field[3][2] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_3,2" }, { text: field[3][3] != 2 ? "❓" : "⬜️", callback_data: "gameBomb_3,3" }],
							[{ text: "?? Забрать банк", callback_data: "gameBombCollect" },],
						]
					}
				});
			}
			else {
				var prize = randomInteger(1, 6)
				if (prize == 5) {
					giveTree(uid, 0)
					prize = "💎 Морт"
				}
				else if (prize == 6) {
					giveTree(uid, 1)
					prize = "💎 Мейсон"
				}
				else {
					await message.user.inc("game_balance", prize * 10)
					prize = `💎 ${prize * 10} ₽`
				}
				bot.sendMessage(message.chat.id, `<b>💣 Вы открыли все пустые клетки!</b>\n
▫️ <b>Ваш выигрыш:</b> ${prize}`, {
					parse_mode: "HTML",
				});
			}
		}
	}

	if (query.data == 'game_prize') {
		if (message.user.prize) return bot.answerCallbackQuery(query.id, '🙂 Вы уже получили свой подарок!', true);
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `🎁 <b>Подарок - Бандит из Гроув-Стрит</b>\n
Для получения подарка подпишитесь на каналы:
▫️ @asik_prog
▫️ @payments_bota`, {
			parse_mode: "HTML",
			reply_markup: { inline_keyboard: [[{ text: "✅ Проверить подписку", callback_data: "game_prize_check" }]] }
		});
	}

	if (query.data == 'game_prize_check') {
		var res = await bot.getChatMember("@payments_bota", message.chat.id)
		var res1 = await bot.getChatMember("@asik_prog", message.chat.id)
		if (message.user.prize) return bot.answerCallbackQuery(query.id, '🙂 Вы уже получили свой подарок!', true);
		if (res.status == 'left' || res1.status == 'left') return bot.answerCallbackQuery(query.id, '❌ Вы подписались не на все каналы!', true);
		await bot.deleteMessage(message.chat.id, message.message_id);
		message.user.trees.push({
			id: 0,
			date: Date.now(),
			lastCollect: Date.now()
		});
		message.user.prize = true
		await message.user.save();
		return bot.sendMessage(message.chat.id, `🎁 <b>Вы получили подарок! Мирный житель уже у вас!</b>`, {
			parse_mode: "HTML",
		});
	}

	if (query.data == 'game_roulette') {
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `💈 <b>Рулетка</b>\n
Стоимость вращения - <b>50₽</b>. Выигрыш начисляется на баланс для покупок
<b>Вращений сегодня:</b> ${message.user.spinsToday || 0}/2\n
<b>💰 Ваш баланс для вывода:</b> ${roundPlus(message.user.outbalance)}₽\n
<b>В рулетке 6 ячеек:</b>
0₽ | 0₽ | 0₽ | 50₽ | 100₽ | 150₽
	`, {
			parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [
					[{ text: "💈 Купить вращение за 50₽", callback_data: "game_roulette_spin" }],
				]
			}
		});
	}

	if (query.data == 'game_roulette_spin') {
		if (message.user.spinsToday >= 2) return bot.answerCallbackQuery(query.id, '❌ Вы уже купили 2 вращения сегодня!', true);
		if (message.user.outbalance < 50) return bot.answerCallbackQuery(query.id, '❌ На Вашем балансе для вывода недостаточно средств!', true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: -50, spinsToday: 1 } })
		bot.deleteMessage(message.chat.id, message.message_id);
		var arr = randomizeArr([0, 0, 0, 50, 100, 150])
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: arr[3] } })
		return bot.sendMessage(message.chat.id, `💈 <b>Рулетка</b>\n\n
						${arr[0]}₽
						${arr[1]}₽
						${arr[2]}₽
🔹${arr[3]}₽🔹
						${arr[4]}₽
						${arr[5]}₽\n
<b>Вам начислено ${arr[3]}₽ на баланс для покупок!</b>
	`, {
			parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [
					[{ text: "◀️ Назад", callback_data: "game_roulette" }],
				]
			}
		});
	}

	if (query.data == 'game_chest') {
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `🔒 Выберете стоимость сундука
?? Вы можете найти в два раза больше ₽, а может быть, сундук окажется пустым
🎲 Вероятность: 50%`, {
			parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [
					[{ text: "1₽", callback_data: "casino_1" },
					{ text: "2₽", callback_data: "casino_2" },
					{ text: "5₽", callback_data: "casino_5" },
					{ text: "10₽", callback_data: "casino_10" }],
					[{ text: "25₽", callback_data: "casino_25" },
					{ text: "50₽", callback_data: "casino_50" },
					{ text: "100₽", callback_data: "casino_100" },
					{ text: "250₽", callback_data: "casino_250" }],
				]
			}
		});
	}

	if (query.data.startsWith("casino_open")) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var bet = Number(query.data.split("_")[2])
		if (bet > message.user.outbalance) await bot.answerCallbackQuery(query.id, 'Недостаточно средств для ставки!', true);
		else if (Math.random() >= 0.58) {
			await message.user.inc("outbalance", bet)
			await bot.answerCallbackQuery(query.id, '💸 Вы выиграли ' + bet * 2 + "₽!", true);
		} else {
			await message.user.inc("outbalance", -bet)
			await bot.answerCallbackQuery(query.id, "😞 Сундук пуст", true);
		}
		return bot.sendMessage(message.chat.id, `🔒 Выберете стоимость сундука
🍀 Вы можете найти в два раза больше ₽, а может быть, сундук окажется пустым
🎲 Вероятность: 50%
					
💰 Ваш игровой: ${roundPlus(message.user.outbalance)}₽\n
💸 Ваша ставка: ${bet} ₽
🎰 Возможный выигрыш: ${bet * 2} ₽`, {
			parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [
					[{ text: "1₽", callback_data: "casino_1" },
					{ text: "2₽", callback_data: "casino_2" },
					{ text: "5₽", callback_data: "casino_5" },
					{ text: "10₽", callback_data: "casino_10" }],
					[{ text: "25₽", callback_data: "casino_25" },
					{ text: "50₽", callback_data: "casino_50" },
					{ text: "100₽", callback_data: "casino_100" },
					{ text: "250₽", callback_data: "casino_250" }],
					[{ text: "🔓 Открыть за " + bet + "₽", callback_data: "casino_open_" + bet }]
				]
			}
		})

	}

	if (query.data.startsWith("casino")) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var bet = Number(query.data.split("_")[1])
		return bot.sendMessage(message.chat.id, `🔒 Выберете стоимость сундука
🍀 Вы можете найти в два раза больше ₽, а может быть, сундук окажется пустым
🎲 Вероятность: 50%
					
💰 Ваш баланс: ${message.user.outbalance} ₽
💸 Ваша ставка: ${bet} ₽
🎰 Возможный выигрыш: ${bet * 2} ₽`, {
			parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [
					[{ text: "1₽", callback_data: "casino_1" },
					{ text: "2₽", callback_data: "casino_2" },
					{ text: "5₽", callback_data: "casino_5" },
					{ text: "10₽", callback_data: "casino_10" }],
					[{ text: "25₽", callback_data: "casino_25" },
					{ text: "50₽", callback_data: "casino_50" },
					{ text: "100₽", callback_data: "casino_100" },
					{ text: "250₽", callback_data: "casino_250" }],
					[{ text: "🔓 Открыть за " + bet + "₽", callback_data: "casino_open_" + bet }]
				]
			}
		})
	}

	if (query.data == 'withdraw') {
		if (message.user.buybalance < 0) return bot.answerCallbackQuery(query.id, '🚫 Для вывода погасите задолженность на балансе для покупок!', true);
		if (message.user.outbalance < 0) return bot.answerCallbackQuery(query.id, '🚫 Для вывода погасите задолженность на балансе для вывода!', true);
		if (message.user.outbalance < 10) return bot.answerCallbackQuery(query.id, '🚫 Минимальная сумма вывода: 10 рублей', true);
		bot.deleteMessage(message.chat.id, message.message_id);

		await message.user.set('menu', 'qiwi');
		await bot.sendMessage(message.chat.id, 'Введите номер QIWI или Payeer кошелька для вывода:\nНапример: +79184422830 или P1061556700', {
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}

	if (query.data == 'reinvest') {
		await message.user.set('menu', 'reinvest');
		bot.deleteMessage(message.chat.id, message.message_id);
		var b = (await User.findOne({ id: 0 })).bhivebalance
		var str = ""
		if (b > 0) str = `🔥 <b>Временная акция: +${b}% - бонус к реинвесту</b>\n\n`
		return bot.sendMessage(message.chat.id, `${str}👉 Введите сумму, которую хотите реинвестировать:`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}
	
	if (query.data == 'reinvests') {
		await message.user.set('menu', 'reinvests');
		bot.deleteMessage(message.chat.id, message.message_id);
		var b = (await User.findOne({ id: 0 })).bhivebalance
		var str = ""
		if (b > 0) str = `🔥 <b>Временная акция: +${b}% - бонус к покупки FlashCoin</b>\n\n`
		return bot.sendMessage(message.chat.id, `${str}?? Введите сумму, для покупки FlashCoin:`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}

	if (query.data == 'uplimit') {
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `
🛑 <b>Лимит ограничивает максимально возможное количество Персонажев одного уровня</b>

<b>Ваш лимит:</b> ${message.user.limit} Персонажев
`, {
			parse_mode: "html",
			reply_markup: {
				inline_keyboard: [[{ text: `🔼 Повысить лимит до ${message.user.limit + 1} за 10 WAVES`, callback_data: "uplimitBuy" }]]
			}
		})
	}

	if (query.data == 'uplimitBuy') {
		bot.deleteMessage(message.chat.id, message.message_id);
		if (message.user.bhivebalance < 10) return bot.answerCallbackQuery(query.id, `На Вашем WAVES балансе недостаточно средств для повышения лимита`, true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { bhivebalance: -10, limit: 1 } })
		return bot.answerCallbackQuery(query.id, `Вы успешно повысили лимит количества Персонажев до ${message.user.limit + 1} за 10 WAVES`, true);
	}

	if (query.data == 'buywaves') {
		await message.user.set('menu', 'buywaves');
		bot.deleteMessage(message.chat.id, message.message_id);
		var price = (await User.findOne({ id: 0 })).totalEarn
		return bot.sendMessage(message.chat.id, `💳 <b>1 WAVES = ${price} рубинов</b>\n👉 Введите количество токенов WAVES, которые Вы хотите купить:`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}
	

	if (query.data == 'trees:collect') {
		let total_balance = 0;

		message.user.trees.map((x) => {
			total_balance += (((Date.now() - message.user.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60);
		});

		await message.user.set('lastCollect', Date.now());

		await bot.deleteMessage(message.chat.id, message.message_id);
		await message.user.inc('fetuses', Number(total_balance.toFixed(2)));
		if (message.user.clanName) {
			var clan = await Clan.findOne({ name: message.user.clanName })
			await Clan.findOneAndUpdate({ name: message.user.clanName }, { $inc: { balance: total_balance * (clan.level / 100) } })
		}
		return bot.answerCallbackQuery(query.id, `Вы успешно собрали ${total_balance.toFixed(2)}  🛡️`, true);
	}

	if (query.data == 'trees:totalMy') {
		let $trees = [];
		let total_earn = 0;

		message.user.trees.map((x) => {
			$trees.push(x.id);
			total_earn += trees.find((a) => a.id == x.id).earn
		});

		let text = ``;
		if ($trees.filter((x) => x === 0).length) text += `\n\n<b>${trees.find((x) => x.id == 0).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 0).length}\n\t\t▪️  Защиты в час: ${$trees.filter((x) => x === 0).length * trees.find((x) => x.id == 0).earn}`;
		if ($trees.filter((x) => x === 1).length) text += `\n\n<b>${trees.find((x) => x.id == 1).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 1).length}\n\t\t▪️  Защиты в час: ${$trees.filter((x) => x === 1).length * trees.find((x) => x.id == 1).earn}`;
		if ($trees.filter((x) => x === 2).length) text += `\n\n<b>${trees.find((x) => x.id == 2).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 2).length}\n\t\t▪️  Защиты в час: ${$trees.filter((x) => x === 2).length * trees.find((x) => x.id == 2).earn}`;
		if ($trees.filter((x) => x === 3).length) text += `\n\n<b>${trees.find((x) => x.id == 3).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 3).length}\n\t\t▪️  Защиты в час: ${$trees.filter((x) => x === 3).length * trees.find((x) => x.id == 3).earn}`;
		if ($trees.filter((x) => x === 4).length) text += `\n\n<b>${trees.find((x) => x.id == 4).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 4).length}\n\t\t▪️  Защиты в час: ${$trees.filter((x) => x === 4).length * trees.find((x) => x.id == 4).earn}`;
		if ($trees.filter((x) => x === 5).length) text += `\n\n<b>${trees.find((x) => x.id == 5).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 5).length}\n\t\t▪️  Защиты в час: ${$trees.filter((x) => x === 5).length * trees.find((x) => x.id == 5).earn}`;
		if ($trees.filter((x) => x === 6).length) text += `\n\n<b>${trees.find((x) => x.id == 6).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 6).length}\n\t\t▪️  Защиты в час: ${$trees.filter((x) => x === 6).length * trees.find((x) => x.id == 6).earn}`;
		if ($trees.filter((x) => x === 7).length) text += `\n\n<b>${trees.find((x) => x.id == 7).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 7).length}\n\t\t▪️  Защиты в час: ${$trees.filter((x) => x === 7).length * trees.find((x) => x.id == 7).earn}`;
		if ($trees.filter((x) => x === 8).length) text += `\n\n<b>${trees.find((x) => x.id == 8).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 8).length}\n\t\t▪️  Защиты в час: ${$trees.filter((x) => x === 8).length * trees.find((x) => x.id == 8).earn}`;

		return bot.editMessageText(`📄 Список Ваших Персонажей: ⤵️${text}\n\n════════════════════\n📊 Суммарный доход Персонажей в час: ${total_earn.toFixed(2)} 🛡️`, {
			parse_mode: "HTML",
			chat_id: message.chat.id,
			message_id: message.message_id
		});
	}

	if (query.data == 'checkFollow') {
		let task = await Task.findOne({ id: message.chat.id });
		if (task) return bot.deleteMessage(message.chat.id, message.message_id);

		bot.getChatMember(-1001724841698, message.chat.id).then(async (res) => {
			if (res.status == 'left') return bot.answerCallbackQuery(query.id, '🚫 Вы не подписаны!');

			message.user.trees.push({
				id: 1,
				date: Date.now(),
				lastCollect: Date.now(),
				health: trees[1].health
			});

			await message.user.save();

			let $task = new Task({
				id: message.chat.id
			});

			await $task.save();

			return bot.editMessageText('Вы выполнили задание и получили <b>Мирного жителя</b>.', {
				parse_mode: "HTML",
				chat_id: message.chat.id,
				message_id: message.message_id
			});
		});
	}

	if (query.data.startsWith('withdraw:')) {
		let id = Number(query.data.split('withdraw:')[1]);
		let ticket = await Ticket.findOne({ id });

		if (!ticket) bot.deleteMessage(message.chat.id, message.message_id);
		if (ticket.wallet.indexOf("P") == -1) { // Платёж через QIWI
			qiwi.toWallet({ account: String(ticket.wallet), amount: ticket.amount, comment: 'Выплата от @invest_x_iphone_robot' }, () => { });
			bot.sendMessage("@payments_bota", ` 🛡️ <a href="tg://user?id=${ticket.id}">Пользователь</a> вывел <b>${ticket.amount}₽</b> через <b>QIWI</b>`, { parse_mode: "HTML" })

	
		}
		else // Платёж через Payeer
		{
			bot.sendMessage("@payments_bota", ` 🛡️ <a href="tg://user?id=${ticket.id}">Пользователь</a> вывел <b>${ticket.amount}₽</b> через <b>Payeer</b>`, { parse_mode: "HTML" })

			require('request')({
				method: 'POST',
				url: 'https://payeer.com/ajax/api/api.php',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: `account=${config.payeer.account}&apiId=${config.payeer.apiId}&apiPass=${config.payeer.apiPass}&action=transfer&curIn=RUB&sum=${ticket.amount * 1.01}&curOut=RUB&to=${ticket.wallet}`
			}, async function (error, response, body) {
				body = JSON.parse(body)
			})
		}

		bot.sendMessage(ticket.id, `✅ <b>Ваша выплата была одобрена</b>
💸 На Ваш ${ticket.wallet.indexOf("P") == -1 ? "QIWI" : "Payeer"} зачислено <b>${ticket.amount}₽</b>\n

🙏 Будем очень признательны за отзыв о боте админу или в чат
☺️ Для нас это очень важно\n
🤝 <b>Рады сотрудничать!</b>
`, {
			parse_mode: "html", reply_markup: {
				inline_keyboard: [
					[{ text: "👨‍💻 Админ", url: "https://t.me/Licifersss" },
					{ text: "💬 Чат", url: "https://t.me chat_participant" }],
					[{ text: "💳 Выплаты", url: "https://t.me/payments_bota" }],

				]
			}
		});
		await User.findOneAndUpdate({ id: 0 }, { $inc: { fc: ticket.amount } })
		await User.findOneAndUpdate({ id: id }, { $inc: { payout: ticket.amount } })
		await ticket.remove();
		bot.editMessageText('Выплатил!', {
			chat_id: message.chat.id,
			message_id: message.message_id
		});
	}

	if (query.data.startsWith('back:')) {
		let id = Number(query.data.split('back:')[1]);
		let ticket = await Ticket.findOne({ id });

		if (!ticket) bot.deleteMessage(message.chat.id, message.message_id);

		let user = await User.findOne({ id: ticket.id });
		bot.sendMessage(ticket.id, `Ваша выплата была отклонена, на ваш счёт возвращено ${ticket.amount}₽`);

		await user.inc('buybalance', ticket.amount);
		await ticket.remove();

		return bot.editMessageText('Вернул!', {
			chat_id: message.chat.id,
			message_id: message.message_id
		});
	}

	if (query.data.startsWith('take:')) {
		let id = Number(query.data.split('take:')[1]);
		let ticket = await Ticket.findOne({ id });

		if (!ticket) bot.deleteMessage(message.chat.id, message.message_id);

		await ticket.remove();
		return bot.editMessageText('Забрал!', {
			chat_id: message.chat.id,
			message_id: message.message_id
		});
	}
	var d = query.data

	if (d == "clan_create") {
		if (message.user.buybalance < 65)
			return bot.answerCallbackQuery(query.id, `На Вашем балансе для покупок недостаточно средств для создания  Банда!`, true);
		state[uid] = 1601
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, 'Введите название для Вашего Клана:', { reply_markup: { keyboard: Cancel, resize_keyboard: true } });
	}

	if (d == "clan_payin") {
		var clan = await Clan.findOne({ name: message.user.clanName })
		if (!clan) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
		state[uid] = 160101
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `💳 <b>Ваш баланс для пополнений:</b> ${message.user.buybalance}₽\nВведите сумму для пополнения баланса Вашей  Банда:`, { parse_mode: "html", reply_markup: { keyboard: Cancel, resize_keyboard: true } });
	}
	if (d == "clan_admin") {
		var clan = await Clan.findOne({ name: message.user.clanName })
		var members = await User.find({ id: { $ne: uid }, clanName: clan.name })
		if (uid != clan.creator_id && uid != clan.zam_id) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `
<b>Ваш  Банд:</b> ${clan.name}
		
<b>Участники  Клана:</b>
<a href="tg://user?id=${uid}">${clan.creator_name}</a> | ${message.user.totalEarn}  🛡️/час | ID: <code>${uid}</code>
${members.map(m => { return `${m.id == clan.zam_id ? `👨‍⚕️ <b>Ваш заместитель: </b>` : ""}<a href="tg://user?id=${m.id}">${m.name}</a> | ${m.totalEarn}  🛡️/час | ID: <code>${m.id}</code>` }).join("\n")}
<b>Доход казны:</b> ${clan.level}%
<b>Всего игроков в  Клане:</b> ${members.length + 1} из ${clan.maxMembers}
<b>Доходность  Клана:</b> ${roundPlus(clan.total_earn)}  🛡️/час
<b>В казне:</b> ${roundPlus(clan.balance)}  🛡️
<b>На балансе:</b> ${roundPlus(clan.bal)}₽\n
<b>Команды главы:</b>
Пригласить участника в  Клан - <code>/invite [id]</code>
Выгнать участника из  Клана - <code>/kick [id]</code>
Назначить заместителя - <code>/invitezam [id]</code>
Убрать заместителя - <code>/removezam</code>
Удалить Клан - <code>/removeGuestHouse</code>
`, {
			parse_mode: "html", reply_markup: {
				inline_keyboard: [
					[{ text: "1⃣ Перевести казну себе", callback_data: "clan_transferMe" }],
					[{ text: "2⃣ Распределить казну", callback_data: "clan_transferAll" }],
					[{ text: `3⃣ Расширить Клан до ${clan.maxMembers + 10} мест (65 рублей)`, callback_data: "clan_expand" }],
					[{ text: `4️⃣ Повысить доходность казны до ${clan.level + 1}% (${(clan.level+1) * 50} рублей)`, callback_data: "clan_upLevel" }],
				]
			}
		});
	}
	if (d == "clan_transferMe") {
		var clan = await Clan.findOne({ name: message.user.clanName })
		var members = await User.find({ id: { $ne: uid }, clanName: clan.name })
		if (uid != clan.creator_id && uid != clan.zam_id) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
		if (clan.balance == 0) return bot.answerCallbackQuery(query.id, `Казна  Клана нулевая!`, true);
		bot.deleteMessage(message.chat.id, message.message_id);
		await Clan.findOneAndUpdate({ name: clan.name }, { balance: 0 })
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: (clan.balance / 2000), outbalance: (clan.balance / 2000) } })
		return bot.sendMessage(message.chat.id, `<b>${clan.balance}  🛡️  Coins</b> из казны  Клана начислены Вам как <b>${roundPlus(clan.balance / 2000)}₽</b> на баланс для покупок и <b>${roundPlus(clan.balance / 2000)}₽</b> на баланс для вывода`, { parse_mode: "html" });
	}
	if (d == "clan_transferAll") {
		var clan = await Clan.findOne({ name: message.user.clanName })
		var members = await User.find({ clanName: clan.name })
		if (uid != clan.creator_id && uid != clan.zam_id) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
		if (clan.balance == 0) return bot.answerCallbackQuery(query.id, `Казна  Клана нулевая!`, true);
		bot.deleteMessage(message.chat.id, message.message_id);
		await Clan.findOneAndUpdate({ name: clan.name }, { balance: 0 })
		var dole = clan.balance / members.length / 2000
		for (const i in members) {
			try {
				await User.findOneAndUpdate({ id: members[i].id }, { $inc: { buybalance: dole, outbalance: dole } })
				await bot.sendMessage(members[i].id, `<b>${roundPlus(clan.balance)}  🛡️  Coins</b> из казны Клана распределены между участниками  Банда\nВам начислено <b>${roundPlus(dole)}₽</b> на баланс для покупок и <b>${roundPlus(dole)}₽</b> на баланс для вывода`, { parse_mode: "html" });
			}
			catch { }
		}
	}
	if (d == "clan_expand") {
		var clan = await Clan.findOne({ name: message.user.clanName })
		if (uid != clan.creator_id && uid != clan.zam_id) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
		if (clan.bal < 65) return bot.answerCallbackQuery(query.id, `На балансе  Клана недотаточно средств!`, true);
		bot.deleteMessage(message.chat.id, message.message_id);
		await Clan.findOneAndUpdate({ name: clan.name }, { $inc: { maxMembers: 10, bal: -65 } })
		await bot.sendMessage(uid, `Вы успешно расширили максимальное количество мест в  Клане до ${clan.maxMembers + 10}`, { parse_mode: "html" });

	}
	if (d == "clan_upLevel") {
		var clan = await Clan.findOne({ name: message.user.clanName })
		if (uid != clan.creator_id && uid != clan.zam_id) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
		if (clan.level >= 20) return bot.answerCallbackQuery(query.id, `Вы достигли максимального уровня увеличения доходности казны!`, true);
		var price = (clan.level+1) * 50
		if (clan.bal < price) return bot.answerCallbackQuery(query.id, `На балансе  Клана недотаточно средств!`, true);
		bot.deleteMessage(message.chat.id, message.message_id);
		await Clan.findOneAndUpdate({ name: clan.name }, { $inc: { level: 1, bal: -price } })
		await bot.sendMessage(uid, `Вы успешно повысили доходность казны  Клана до ${clan.level + 1}%`, { parse_mode: "html" });

	}
	if (d.startsWith("clanAccept")) {
		var clan = await Clan.findOne({ _id: d.split("_")[1] })
		var members = await User.find({ clanName: clan.name })
		if (members.length > clan.maxMembers - 1) return bot.answerCallbackQuery(query.id, `В  Клане закончились места!`, true);
		bot.deleteMessage(message.chat.id, message.message_id);
		await User.findOneAndUpdate({ id: uid }, { clanName: clan.name })
		await bot.sendMessage(uid, `✅ Вы успешно вступили в  Клан <b>${clan.name}</b>\nНажмите /leave_clan, чтобы покинуть  Клан`, { parse_mode: "html" });
		bot.sendMessage(clan.creator_id, `➕ В ваш  Клан вступил <a href="tg://user?id=${uid}">пользователь</a>\nВведите <code>/kick ${uid}</code>, чтобы выгнать участника из  Банды`, { parse_mode: "html" });
		totalClanEarnCalc()
	}
	if (d == "clanDecline") {
		bot.sendMessage(uid,`  ❌ Вы отменили заявку на вступление в  Клан`, { parse_mode: "html" });
	}

	if (d == "clan_top") {
		var clans = await Clan.find({ $and: [{ name: { $ne: "." } }, { name: { $ne: "dsfsdf" } }] }).sort({ total_earn: -1 }).limit(5)
		bot.deleteMessage(message.chat.id, message.message_id);
		if (clans.length == 5)
			return bot.sendMessage(message.chat.id, `
<b>🏆 ТОП 5 Кланов 🔱</b>

👑 ${clans[0].name} | ${clans[0].total_earn}  🛡️

2⃣ ${clans[1].name} | ${clans[1].total_earn}  🛡️

3⃣${clans[2].name} | ${clans[2].total_earn}  🛡️

4⃣ ${clans[3].name} | ${clans[3].total_earn}  🛡️

5⃣ ${clans[4].name} | ${clans[4].total_earn}  🛡️`, { parse_mode: "html" });
		else
			return bot.sendMessage(message.chat.id, `<b>🏆 Недостаточно  Кланов для составления топа</b>`, { parse_mode: "html" });

	}
	if (d == "clan_status") {
		var clans = await Clan.find({ $and: [{ name: { $ne: "." } }, { name: { $ne: "dsfsdf" } }] }).sort({ total_earn: -1 }).limit(5)
		bot.deleteMessage(message.chat.id, message.message_id);
		var ost = Math.ceil((getNextClanWarTimestamp() - (new Date()).getTime()) / (1000 * 60 * 60 * 24))
		if (clans.length == 5)
			return bot.sendMessage(message.chat.id, `
<b> 🛡️ Битва  Кланов</b>

🕒 Битва  Кланов проходит 5, 15 и 25-го числа каждого месяца!
🏆  Клан-победитель получает <b> 🛡️ 50k  Coins</b> в свою казну
За 2 место - <b> 🛡️ 25k  Coins</b>
За 3 место - <b> 🛡️ 15k  Coins</b>

<b>До следующей битвы:</b> ${ost} дней
		
<b>🔝 Топ  Кланов текущей битвы 🔝</b>
		
1. ${clans[0].name} - ${clans[0].total_earn}  🛡️ в час
2. ${clans[1].name} - ${clans[1].total_earn}  🛡️ в час
3. ${clans[2].name} - ${clans[2].total_earn}  🛡️ в час
`, { parse_mode: "html" });
		else
			return bot.sendMessage(message.chat.id, `<b>🏆 Недостаточно  кланов для составления топа</b>`, { parse_mode: "html" });
	}


	if (ADMINS.indexOf(query.from.id) !== -1) {
		if (d == "admin_mm") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите текст рассылки или отправьте изображение:\n\n<i>Для добавления кнопки-ссылки в рассылаемое сообщение добавьте в конец сообщения строку вида:</i>\n# Текст на кнопке # http://t.me/link #', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 7770
		} else if (d == "admin_w") {
			bot.deleteMessage(message.chat.id, message.message_id);
			let tickets = await Ticket.find();
			if (tickets.length == 0) return bot.sendMessage(uid, 'Заявок на вывод нет');
			await tickets.map((x) => {
				bot.sendMessage(uid, `📝 Игрок: <a href="tg://user?id=${x.id}">Игрок</a> (ID: <code>${x.id}</code>)\n
	💰 Сумма: <code>${x.amount}</code>₽
	🥝 Кошелёк: <code>${x.wallet}</code>`, {
					parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: '📭 Подтвердить выплату', callback_data: `withdraw:${x.id}` }], [{ text: '♻️ Вернуть', callback_data: `back:${x.id}` }], [{ text: '🚫 Забрать', callback_data: `take:${x.id}` }]] }
				});
			});
		}
		else if (d.startsWith("admin_bm")) {
			bot.deleteMessage(message.chat.id, message.message_id);
			var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
			if (d.split("_")[2] == "false") bm.status = false
			if (d.split("_")[2] == "true") bm.status = true
			await User.updateOne({ id: 1, menu: JSON.stringify(bm) })
			console.log(bm)
			bot.sendMessage(uid, `Настройки фабрики:\n
Стоимость: ${bm.price} рублей
Статус: ${bm.status ? "✅ доступна для покупки" : "❌ недоступна для покупки"}
Доступно: ${bm.count}
Куплено: ${bm.bought}
`, {
				reply_markup: {
					inline_keyboard: [
						[{ text: 'Выпустить фабрику', callback_data: `Admin_bm_new` }],
						[{ text: 'Изменить стоимость', callback_data: `Admin_bm_price` }],
						[{ text: 'Изменить доступных', callback_data: `Admin_bm_count` }],
						[{ text: (bm.status ? 'Сделать непоступной' : "Сделать доступной"), callback_data: (bm.status ? 'admin_bm_false' : "admin_bm_true") }],
						[{ text: "◀️ Назад", callback_data: "admin_return" }],
					]
				}, parse_mode: "HTML"
			})
		}
		else if (d == "admin_top") {
			bot.deleteMessage(message.chat.id, message.message_id);
			var u = await User.find({ ref: { $ne: 0 }, _id: { $gt: mongo.Types.ObjectId.createFromTime(Date.now() / 1000 - 24 * 60 * 60) } })
			console.log(u)
			var top = []
			u.map((e) => {
				var t = top.filter(u => { if (e.ref == u.id) return true; else return false })
				if (t.length == 0) top.push({ id: e.ref, ref: 1 })
				else {
					top = top.filter(u => { if (e.ref == u.id) return false; else return true })
					top.push({ id: e.ref, ref: t[0].ref + 1 })
				}
			})
			top = top.sort((a, b) => { if (a.ref <= b.ref) return 1; else return -1 })
			top.length = 20
			var str = `<b>🕒 Топ рефоводов за 24 часа:</b>\n\n`
			for (const i in top) {
				var us = await User.findOne({ id: top[i].id })
				str += `<b>${Number(i) + 1})</b> <a href="tg://user?id=${us.id}">${us.name ? us.name : "Пользователь"}</a> - <b>${top[i].ref}</b> рефералов\n`
			}
			bot.sendMessage(uid, str, { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_return" }]] }, parse_mode: "HTML" })
		}
		else if (d == "Admin_bm_new") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите количество фабрик для продажи (число купивших обнулится, и фабрики станут автоматически доступны для покупки по текущей стоимости и пропадут с покупки, когда число купивших привысит доступное количество):', { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_bm" }]] }, parse_mode: "HTML" })
			state[uid] = 77771
		}
		else if (d == "Admin_bm_price") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите новую стоимость фабрики в рублях:', { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_bm" }]] }, parse_mode: "HTML" })
			state[uid] = 77772
		}
		else if (d == "Admin_bm_count") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите новое количество доступных фабрик:', { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_bm" }]] }, parse_mode: "HTML" })
			state[uid] = 77773
		}
		else if (d == "admin_b") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите % для бонуса к пополнению или 0 для отключения:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 7771
		}
		if (query.data == "wipe") {
    await User.updateMany({ trees: [], buybalance: 0, outbalance: 0, deposit: 0, payout: 0, bhivebalance: 0 })
    await WildBee.updateMany({ creator_id: uid }, { level: 1 })
    bot.editMessageText('Бот обнулен создателем!', { chat_id: uid, message_id: message.message_id, parse_mode: html })
   }
		else if (d == "admin_br") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите % для бонуса к реинвесту или 0 для отключения:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 77712
		}
		else if (d == "admin_bi") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите % для бонуса к выводу или 0 для отключения:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 777122289
		}
		else if (d == "admin_waves") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите курс WAVES в рубинах:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 777122
		}
		else if (d == "a_voucherpromo") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Выбери баланс для создания промо', { reply_markup: RM_promo, parse_mode: "HTML" })
		}
		else if (d == "voucherbuy") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Ввведи сумму', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 99999
		}
		else if (d == "voucherout") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Ввведи сумму', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 10000
		}
		else if (d == "admin_weather") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Выберете погоду:', {
				reply_markup: {
					inline_keyboard: [
						[{ text: "🌧 Дождь (+5% к доходу)", callback_data: "admin_weatherSet_0" }],
						[{ text: "☁️ Пасмурно (+2% к доходу)", callback_data: "admin_weatherSet_1" }],
						[{ text: "☀️ Солнечно (-2% к доходу)", callback_data: "admin_weatherSet_2" }],
						[{ text: "🔥 Знойная жара (-5% к доходу)", callback_data: "admin_weatherSet_3" }],
						[{ text: "🌦 Умеренная (обычная доходу)", callback_data: "admin_weatherSet_4" }],
						[{ text: "◀️ Назад", callback_data: "admin_return" }]
					]
				}, parse_mode: "HTML"
			})
		}
		else if (~d.indexOf("admin_weatherSet")) {
			bot.deleteMessage(message.chat.id, message.message_id);
			var w = Number(d.split("_")[2])
			bot.sendMessage(uid, 'Сбор ископаемых у всех игроков...', { parse_mode: "HTML" })
			await collectAllUsers()
			await setWeather(w)
			bot.sendMessage(uid, 'Погода изменена!', { reply_markup: RM_admin_return, parse_mode: "HTML" })

		}
		
		else if (d == "admin_limit") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите максимально возможное количество Персонажев для покупки:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 7771222
		}

		else if (d == "admin_u") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите ID пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 7772
		}
		else if (d.split("_")[0] == "addBuyBal") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите сумму пополнения баланса для покупок пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 7773
			data[uid] = d.split("_")[1]
		}
		else if (d.split("_")[0] == "adminsendmsg") {
   bot.deleteMessage(message.chat.id, message.message_id);
   bot.sendMessage(uid, 'Введите сообщение , которое хотите отправить пользователю:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
   state[uid] = 111222
   data[uid] = d.split("_")[1]
  }
		else if (d.split("_")[0] == "addOutBal") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите сумму пополнения баланса для вывода пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 7774
			data[uid] = d.split("_")[1]
		}
		else if (d.split("_")[0] == "addBHIVEBal") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите сумму пополнения WAVES баланса пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 77745
			data[uid] = d.split("_")[1]
		}
		else if (d.split("_")[0] == "addPayIns") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите сумму для добавления в сумму пополнений пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 777455
			data[uid] = d.split("_")[1]
		}
		else if (d.split("_")[0] == "addPayOuts") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите сумму для добавления в сумму выводов пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 77745555
			data[uid] = d.split("_")[1]
		}
		else if (d.split("_")[0] == "editBuyBal") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите новый баланс для покупок пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 7775
			data[uid] = d.split("_")[1]
		}
		else if (d.split("_")[0] == "editOutBal") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите новый баланс для вывода пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 7776
			data[uid] = d.split("_")[1]
		}
		else if (d.split("_")[0] == "editBHIVEBal") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите новый WAVES баланс пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 77765
			data[uid] = d.split("_")[1]
		}
		else if (d.split("_")[0] == "editPayIns") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите новую сумму пополнений пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 777655
			data[uid] = d.split("_")[1]
		}
		else if (d.split("_")[0] == "editPayOuts") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите новую сумму выводов пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 77765555
			data[uid] = d.split("_")[1]
		}
		else if (d.split("_")[0] == "giveTree") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Выберете Персонажево для выдачи:', { reply_markup: { inline_keyboard: [[{ text: trees[0].name, callback_data: "giveTree2_" + d.split("_")[1] + "_0" }], [{ text: trees[1].name, callback_data: "giveTree2_" + d.split("_")[1] + "_1" }], [{ text: trees[2].name, callback_data: "giveTree2_" + d.split("_")[1] + "_2" }], [{ text: trees[3].name, callback_data: "giveTree2_" + d.split("_")[1] + "_3" }], [{ text: trees[4].name, callback_data: "giveTree2_" + d.split("_")[1] + "_4" }], [{ text: trees[5].name, callback_data: "giveTree2_" + d.split("_")[1] + "_5" }], [{ text: trees[6].name, callback_data: "giveTree2_" + d.split("_")[1] + "_6" }], [{ text: trees[7].name, callback_data: "giveTree2_" + d.split("_")[1] + "_7" }]] }, parse_mode: "HTML" })
		}

		else if (d.split("_")[0] == "giveTree2") {
			bot.deleteMessage(message.chat.id, message.message_id);
			giveTree(Number(d.split("_")[1]), Number(d.split("_")[2]))
			bot.sendMessage(Number(d.split("_")[1]), 'Вам выдано Персонажево: ' + trees[Number(d.split("_")[2])].name, { rparse_mode: "HTML" })
			bot.sendMessage(uid, `${trees[Number(d.split("_")[2])].name} выдан пользователю`, { reply_markup: RM_admin_return, parse_mode: "HTML" })
		}
		else if (d.split("_")[0] == "takeTree") {
			bot.deleteMessage(message.chat.id, message.message_id);
			var id = Number(d.split("_")[1])
			var u = await User.findOne({ id })
			var keyboard = { inline_keyboard: [] }
			for (var i = 0; i < u.trees.length; i++) {
				var tree = u.trees[i]
				console.log(tree)
				keyboard.inline_keyboard.push([{ text: trees.find((x) => x.id == tree.id).name, callback_data: "takeTree2_" + id + "_" + i }])
			}
			bot.sendMessage(uid, 'Выберете Персонажево, которого необходимо отнять:', { reply_markup: keyboard, parse_mode: "HTML" })
		}
		else if (d.split("_")[0] == "takeTree2") {
			bot.deleteMessage(message.chat.id, message.message_id);
			var id = Number(d.split("_")[1])
			var i = Number(d.split("_")[2])
			var u = await User.findOne({ id })
			u.trees.splice(i, 1)
			await User.findOneAndUpdate({ id }, { trees: u.trees })
			bot.sendMessage(uid, 'Вы успешно забрали Персонажево у пользователя!', { reply_markup: { inline_keyboard: [[{ text: "Назад", callback_data: "takeTree_" + id }]] }, parse_mode: "HTML" })
		}

		else if (d == "a_voucher") {
            console.log(trees[0])
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Выберете персонажа для создания чека:', { reply_markup: { inline_keyboard: [[{ text: trees[0].name, callback_data: "voucher_0" }], [{ text: trees[1].name, callback_data: "voucher_1" }], [{ text: trees[2].name, callback_data: "voucher_2" }], [{ text: trees[3].name, callback_data: "voucher_3" }], [{ text: trees[4].name, callback_data: "voucher_4" }], [{ text: trees[5].name, callback_data: "voucher_5" }], [{ text: trees[6].name, callback_data: "voucher_6" }], [{ text: trees[7].name, callback_data: "voucher_7" }], [{ text: trees[8].name, callback_data: "voucher_8" }]] }, parse_mode: "HTML" })
		}
		else if (d.split("_")[0] == "voucher") {
			bot.deleteMessage(message.chat.id, message.message_id);
			var cid = generateID(8)
			await Voucher.insertMany({ id: cid, tree_id: Number(d.split("_")[1]) })
			bot.sendMessage(uid, `Чек создан:\nhttps://t.me/SanAndreas_inv_bot?start=C${cid}`, { reply_markup: RM_admin_return })
		}
		else if (d == "admin_mm_stop") {
			var tek = Math.round((mm_i / mm_total) * 40)
			var str = ""
			for (var i = 0; i < tek; i++) str += "+"
			str += '>'
			for (var i = tek + 1; i < 41; i++) str += "-"
			mm_status = false;
			bot.editMessageText("Рассылка остановлена!", { chat_id: mm_achatid, message_id: mm_amsgid })
			mm_u = []
		}
		else if (d == "admin_mm_pause") {
			var tek = Math.round((mm_i / mm_total) * 40)
			var str = ""
			for (var i = 0; i < tek; i++) str += "+"
			str += '>'
			for (var i = tek + 1; i < 41; i++) str += "-"
			bot.editMessageText("<b>Выполнено:</b> " + mm_i + '/' + mm_total + ' - ' + Math.round((mm_i / mm_total) * 100) + '%\n' + str + "\n\n<b>Статистика:</b>\n<b>Успешных:</b> " + mm_ok + "\n<b>Неуспешных:</b> " + mm_err, { chat_id: mm_achatid, message_id: mm_amsgid, reply_markup: RM_mm2, parse_mode: html })
			mm_status = false;
		}
		else if (d == "admin_mm_play") {
			mm_status = true;
			bot.editMessageText("Выполнено: " + mm_i + '/' + mm_total + ' - ' + Math.round((mm_i / mm_total) * 100) + '%\n', { chat_id: mm_achatid, message_id: mm_amsgid, reply_markup: RM_mm1 })
		}
		else if (d.split("_")[0] == "ban") {
      var uuid = Number(d.split("_")[1])
      await User.findOneAndUpdate({ id: uuid }, { ban: true })
      bot.editMessageText('<a href="tg://user?id=' + uuid + '">Пользователь</a> заблокирован!', { chat_id: uid, message_id: message.message_id, parse_mode: html })
      bot.sendMessage("@payments_bota", ` <a href="tg://user?id=${uuid}">Пользователь</a> заблокирован!`, { parse_mode: "HTML" })
    }
    else if (d.split("_")[0] == "unban") {
      var uuid = Number(d.split("_")[1])
      await User.findOneAndUpdate({ id: uuid }, { ban: false })
      bot.editMessageText('<a href="tg://user?id=' + uuid + '">Пользователь</a> разбанен!', { chat_id: uid, message_id: message.message_id, parse_mode: html })
      bot.sendMessage("@payments_bota", ` <a href="tg://user?id=${uuid}">Пользователь</a> разблокирован!`, { parse_mode: "HTML" })
      }
      else if (d.split("_")[0] == "adminwipe") {
      var uuid = Number(d.split("_")[1])
      await User.findOneAndUpdate({ id: uuid }, { trees: [], buybalance: 0, outbalance: 0, deposit: 0, payout: 0, bhivebalance: 0, frigbalance: 0 })
    await WildBee.findOneAndUpdate({ creator_id: uid }, { level: 1 })
    bot.sendMessage(data[uuid], 'Вы были обнулены создателем!', { parse_mode: "HTML" })
      bot.editMessageText('<a href="tg://user?id=' + uuid + '">Пользователь</a> обнулен!', { chat_id: uid, message_id: message.message_id, parse_mode: html })
      bot.sendMessage("@payments_bota", ` <a href="tg://user?id=${uuid}">Пользователь</a> обнулен!`, { parse_mode: "HTML" })
    }
		else if (d == "admin_return") {
			bot.deleteMessage(message.chat.id, message.message_id);
			var h = process.uptime() / 3600 ^ 0
			var m = (process.uptime() - h * 3600) / 60 ^ 0
			var s = process.uptime() - h * 3600 - m * 60 ^ 0
			var heap = process.memoryUsage().rss / 1048576 ^ 0
			var b = (await User.findOne({ id: 0 })).deposit
			return qiwi.getBalance(async (err, balance) => {
				bot.sendMessage(uid, '<b>Админ-панель:</b>\n\n<b>Аптайм бота:</b> ' + h + ' часов ' + m + ' минут ' + s + ' секунд\n<b>Пользователей в боте: </b>' + (await User.countDocuments({})) + '\n<b>Памяти использовано:</b> ' + heap + "МБ\n<b>Заявок на вывод:</b> " + await Ticket.countDocuments() + "\n<b>Баланс QIWI:</b> " + balance.accounts[0].balance.amount + "₽\n<b>Бонус к пополнению:</b> " + b + "%", { parse_mode: "HTML", reply_markup: RM_admin })
			})
		}
    
	}
});

var state = []


User.prototype.inc = function (field, value = 1) {
	this[field] += value;
	return this.save();
}

User.prototype.dec = function (field, value = 1) {
	this[field] -= value;
	return this.save();
}

User.prototype.set = function (field, value) {
	this[field] = value;
	return this.save();
}

function getNavigationIcon(id, tree_id) {
	if (id == tree_id) return '🔵';
	else {
		if (id == 0) return '1️⃣';
		if (id == 1) return '2️⃣';
		if (id == 2) return '3️⃣';
		if (id == 3) return '4️⃣';
		if (id == 4) return '5️⃣';
		if (id == 5) return '6️⃣';
		if (id == 6) return '7️⃣';
		if (id == 7) return '8️⃣';
		if (id == 8) return '9️⃣';
	}
}

function getNavigationQuery(id, tree_id) {
	if (id == tree_id) return 'none';
	else {
		if (id == 0) return 'trees:shop0';
		if (id == 1) return 'trees:shop1';
		if (id == 2) return 'trees:shop2';
		if (id == 3) return 'trees:shop3';
		if (id == 4) return 'trees:shop4';
		if (id == 5) return 'trees:shop5';
		if (id == 6) return 'trees:shop6';
		if (id == 7) return 'trees:shop7';
		if (id == 8) return 'trees:shop8';
	}
}

function getInventoryIcon(id, tree_id) {
	if (id == tree_id) return '🔴';
	else {
		if (id == 0) return '1️⃣';
		if (id == 1) return '2️⃣';
		if (id == 2) return '3️⃣';
		if (id == 3) return '4️⃣';
		if (id == 4) return '5️⃣';
		if (id == 5) return '6️⃣';
		if (id == 6) return '7️⃣';
		if (id == 7) return '8️⃣';
		if (id == 8) return '9️⃣';
	}
}

function getInventoryQuery(id, tree_id) {
	if (id == tree_id) return 'none';
	else {
		if (id == 0) return 'trees:inv0';
		if (id == 1) return 'trees:inv1';
		if (id == 2) return 'trees:inv2';
		if (id == 3) return 'trees:inv3';
		if (id == 4) return 'trees:inv4';
		if (id == 5) return 'trees:inv5';
		if (id == 6) return 'trees:inv6';
		if (id == 7) return 'trees:inv7';
		if (id == 8) return 'trees:inv8';
	}
}

var lastTxnId
async function payeerCheck() {
	require('request')({
		method: 'POST',
		url: 'https://payeer.com/ajax/api/api.php?history',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: `account=${config.payeer.account}&apiId=${config.payeer.apiId}&apiPass=${config.payeer.apiPass}&action=history&count=1&type=incoming`
	}, async function (error, response, body) {
		body = JSON.parse(body)
		for (const txnId in body.history) {
			if (lastTxnId == null) { lastTxnId = txnId; console.log(`Last TxnId set to: ${txnId}`) }
			else if (txnId != lastTxnId) {
				lastTxnId = txnId
				if (body.history[txnId].type != "transfer" || body.history[txnId].status != "success" || !body.history[txnId].comment) return;

				let user = await User.findOne({ id: Number(body.history[txnId].comment.split("GTA")[1]) });
				if (!user) return;
				if (body.history[txnId].creditedCurrency == "RUB")
					var sum = roundPlus(Number(body.history[txnId].creditedAmount))
				else return
				var id = user.id

				var b = (await User.findOne({ id: 0 })).deposit

				if (b == 0) {
					await user.inc('deposit', sum);
					await user.inc('buybalance', sum);
					await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: sum } })
					bot.sendMessage(id, `Ваш баланс пополнен на ${sum}₽ через Payeer`);
					bot.sendMessage("@payments_bota", ` 🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${sum}₽</b> через <b>Payeer</b>`, { parse_mode: "HTML" })
					ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит через Payeer: ${sum}₽`, { parse_mode: "HTML" }))
				} else {
					await user.inc('deposit', sum);
					b = b / 100
					await user.inc('buybalance', sum + sum * b);
					await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: sum } })
					bot.sendMessage(id, `Ваш баланс пополнен на ${sum}₽ и Вы получаете бонус - ${roundPlus(sum * b)}₽!`);
					bot.sendMessage("@payments_bota", ` 🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${sum}₽</b> через <b>Payeer</b> и получил ${roundPlus(sum*b)}₽ бонусом!`, { parse_mode: "HTML" })
					ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${sum}₽ через Payeer + ${roundPlus(sum * b)}₽ бонус`, { parse_mode: "HTML" }))
				}
				await User.findOneAndUpdate({ id: user.ref }, { $inc: { buybalance: roundPlus(sum * 0.05) } })
				await User.findOneAndUpdate({ id: user.ref }, { $inc: { outbalance: roundPlus(sum * 0.05) } })
				bot.sendMessage(user.ref, `🤝 Ваш <a href="tg://user?id=${id}">реферал</a> пополнил баланс на <b>${sum}₽</b>!\n💸 Вам начислено по <b>${roundPlus(sum * 0.05)}₽</b> на балансы для покупок и для вывода`, { parse_mode: "HTML" }).catch()
			}
		}
	})
}

if (config.payeer.enabled) {
	setInterval(payeerCheck, 10000)
	payeerCheck()
}

setInterval(async () => {
	qiwi.getOperationHistory({ rows: 10, operation: 'IN' }, (err, response) => {
		response.data.map(async (x) => {
			if (!x.comment) return;
			if (txnId.indexOf(x.txnId) !== -1) return;

			let id = Number(x.comment.split("GTA")[1]);
			if (!id) return;
			let user = await User.findOne({ id });
			if (!user) return;
			if (x.sum.currency != 643) return;
			var b = (await User.findOne({ id: 0 })).deposit / 100
			var sum = x.sum.amount
			if (b > 0) {
				await user.inc('deposit', x.sum.amount);
				if (user.deposit + x.sum.amount > 100 && !user.not) {
					//await bot.sendMessage(id, `💰 Вы пополнили баланс бота более, чем на 100₽ и приглашаетесь в чат инвесторов!\nПерешлите это сообщение администраторам`);
					await User.findOneAndUpdate({ id: user.id }, { not: true })
				}

				await user.inc('buybalance', x.sum.amount + x.sum.amount * b);
				await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
				bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}₽ через QIWI и Вы получаете бонус - ${roundPlus(x.sum.amount * b)}₽!`);
				bot.sendMessage("@payments_bota", ` 🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}₽</b> через <b>QIWI</b> и получил ${roundPlus(x.sum.amount * b)}₽ бонусом!`, { parse_mode: "HTML" })
				ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}₽ через QIWI + ${roundPlus(x.sum.amount * b)}₽ бонус`, { parse_mode: "HTML" }))

			}
			else if (b == 0) {
				await user.inc('deposit', x.sum.amount);
				if (user.deposit + x.sum.amount > 100 && !user.not) {
					//await bot.sendMessage(id, `💰 Вы пополнили баланс бота более, чем на 100₽ и приглашаетесь в чат инвесторов!\nПерешлите это сообщение администраторам`);
					await User.findOneAndUpdate({ id: user.id }, { not: true })
				}
				await user.inc('buybalance', x.sum.amount);
				await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
				bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}₽`);
				bot.sendMessage("@payments_bota", ` 🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}₽</b> через <b>QIWI</b>`, { parse_mode: "HTML" })
				ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}₽ через QIWI`, { parse_mode: "HTML" }))
			} else {
				await user.inc('deposit', x.sum.amount);
				if (user.deposit + x.sum.amount > 100 && !user.not) {
					//await bot.sendMessage(id, `💰 Вы пополнили баланс бота более, чем на 100₽ и приглашаетесь в чат инвесторов!\nПерешлите это сообщение администраторам`);
					await User.findOneAndUpdate({ id: user.id }, { not: true })
				}
				b = b / 100
				await user.inc('buybalance', x.sum.amount + x.sum.amount * b);
				await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
				bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}₽ через QIWI и Вы получаете бонус - ${roundPlus(x.sum.amount * b)}₽!`);
				bot.sendMessage("@payments_bota", ` 🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}₽</b> через <b>QIWI</b> и получил ${roundPlus(x.sum.amount * b)}₽ бонусом!`, { parse_mode: "HTML" })
				ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}₽ через QIWI + ${roundPlus(x.sum.amount * b)}₽ бонус`, { parse_mode: "HTML" }))

			}
			await User.findOneAndUpdate({ id: user.ref }, { $inc: { buybalance: roundPlus(x.sum.amount * 0.05) } })
			await User.findOneAndUpdate({ id: user.ref }, { $inc: { outbalance: roundPlus(x.sum.amount * 0.05) } })

			bot.sendMessage(user.ref, `🤝 Ваш <a href="tg://user?id=${id}">реферал</a> пополнил баланс на <b>${x.sum.amount}₽</b>!\n💸 Вам начислено по <b>${roundPlus(x.sum.amount * 0.05)}₽</b> на балансы для покупок и для вывода`, { parse_mode: "HTML" }).catch()

			txnId.push(x.txnId)
			require('fs').writeFileSync('./txnId.json', JSON.stringify(txnId));
		});
	});
}, 10000);

setInterval(async () => {
	qiwi.getOperationHistory({ rows: 10, operation: 'IN' }, (err, response) => {
		response.data.map(async (x) => {
			if (!x.comment) return;
			if (txnId.indexOf(x.txnId) !== -1) return;
			if (x.comment.startsWith('ml')) {
			let id = Number(x.comment.split("ml")[1]);
			if (!id) return;
			let user = await User.findOne({ id });
			if (!user) return;
			if (x.sum.currency != 643) return;
			var b = (await User.findOne({ id: 0 })).deposit / 200
			var sum = x.sum.amount
			if (b > 0) {
				await user.inc('game_balance', x.sum.amount);
				if (user.game_balance + x.sum.amount > 5 && !user.kredit) {
					await bot.sendMessage(id, `💰 Вы пополнили баланс на 150₽ и закрыли кредит. Теперь Вам доступен вывод`);
					await User.findOneAndUpdate({ id: user.id }, { kredit: 0 })
				}

				await user.inc('game_balance', x.sum.amount + x.sum.amount * b);
				await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
				bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}₽ и Вы получаете бонус - ${roundPlus(x.sum.amount * b)}₽!`);
				bot.sendMessage("@payments_bota", `🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}₽</b> и получил ${roundPlus(x.sum.amount * b)}₽ бонусом!\nПС: QIWI`, { parse_mode: "HTML" })
				ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}₽ + ${roundPlus(x.sum.amount * b)}₽ бонус\nПС: QIWI`, { parse_mode: "HTML" }))

			}
			else if (b == 0) {
				await user.inc('game_balance', x.sum.amount);
				if (user.game_balance + x.sum.amount > 5 && !user.kredit) {
					await bot.sendMessage(id, `💰 Вы пополнили баланс на 150₽ и закрыли кредит. Теперь Вам доступен вывод`);
					await User.findOneAndUpdate({ id: user.id }, { kredit: 0 })
				}
				await user.inc('game_balance', x.sum.amount);
				await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
				bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}₽`);
				bot.sendMessage("@payments_bota", `🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}₽</b>\nПС: QIWI`, { parse_mode: "HTML" })
				ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}₽\nПС: QIWI`, { parse_mode: "HTML" }))
			} else {
				await user.inc('game_balance', x.sum.amount);
				if (user.game_balance + x.sum.amount > 5 && !user.kredit) {
					await bot.sendMessage(id, `💰 Вы пополнили баланс на 150₽ и закрыли кредит. Теперь Вам доступен вывод`);
					await User.findOneAndUpdate({ id: user.id }, { kredit: 0 })
				}
				b = b / 200
				await user.inc('game_balance', x.sum.amount + x.sum.amount * b);
				await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
				bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}₽ и Вы получаете бонус - ${roundPlus(x.sum.amount * b)}₽!`);
				bot.sendMessage("@payments_bota", `🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}₽</b> и получил ${roundPlus(x.sum.amount * b)}₽ бонусом!\nПС: QIWI`, { parse_mode: "HTML" })
				ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}₽ + ${roundPlus(x.sum.amount * b)}₽ бонус`, { parse_mode: "HTML" }))

			}
			// await User.findOneAndUpdate({ id: user.ref }, { $inc: { buybalance: roundPlus(x.sum.amount * 0.08) } })
			await User.findOneAndUpdate({ id: user.ref }, { $inc: { outbalance: roundPlus(x.sum.amount * 0.10) } })

			bot.sendMessage(user.ref, `🤝 Ваш <a href="tg://user?id=${id}">реферал</a> пополнил баланс на <b>${x.sum.amount}₽</b>!\n💸 Вам начислено по <b>${roundPlus(x.sum.amount * 0.10)}₽</b>`, { parse_mode: "HTML" }).catch()

			txnId.push(x.txnId)
			require('fs').writeFileSync('./txnId.json', JSON.stringify(txnId));
			}
		});
	});
}, 10000);

async function mmTick() {
	if (mm_status) {
		try {
			mm_i++
			if (mm_type == "text") {
				if (mm_btn_status)
					bot.sendMessage(mm_u[mm_i - 1], mm_text, { reply_markup: { inline_keyboard: [[{ text: mm_btn_text, url: mm_btn_link }]] }, parse_mode: html }).then((err) => { mm_ok++ }).catch((err) => { mm_err++ })
				else
					bot.sendMessage(mm_u[mm_i - 1], mm_text, { parse_mode: html }).then((err) => { console.log((mm_i - 1) + ') ID ' + mm_u[mm_i - 1] + " OK"); mm_ok++ }).catch((err) => { mm_err++ })
			}
			else if (mm_type == "img") {
				if (mm_btn_status)
					bot.sendPhoto(mm_u[mm_i - 1], mm_imgid, { caption: mm_text, reply_markup: { inline_keyboard: [[{ text: mm_btn_text, url: mm_btn_link }]] } }).then((err) => { mm_ok++ }).catch((err) => { mm_err++ })
				else
					bot.sendPhoto(mm_u[mm_i - 1], mm_imgid, { caption: mm_text }).then((err) => { console.log((mm_i - 1) + ') ID ' + mm_u[mm_i - 1] + " OK"); mm_ok++ }).catch((err) => { mm_err++ })
			}
			if (mm_i % 10 == 0) {
				var tek = Math.round((mm_i / mm_total) * 40)
				var str = ""
				for (var i = 0; i < tek; i++) str += "+"
				str += '>'
				for (var i = tek + 1; i < 41; i++) str += "-"
				bot.editMessageText("<b>Выполнено:</b> " + mm_i + '/' + mm_total + ' - ' + Math.round((mm_i / mm_total) * 100) + '%\n' + str + "\n\n<b>Статистика:</b>\n<b>Успешных:</b> " + mm_ok + "\n<b>Неуспешных:</b> " + mm_err, { chat_id: mm_achatid, message_id: mm_amsgid, reply_markup: RM_mm1, parse_mode: html })
			}
			if (mm_i == mm_total) {
				mm_status = false;
				bot.editMessageText("Выполнено: " + mm_i + '/' + mm_total, { chat_id: mm_achatid, message_id: mm_amsgid })
				sendAdmins('<b>Рассылка завершена!\n\nСтатистика:\nУспешно:</b> ' + mm_ok + "\n<b>Неуспешно:</b> " + mm_err, { parse_mode: html })
				mm_u = []
			}
		} finally { }
	}
}

setInterval(mmTick, 100);

var mm_total
var mm_i
var mm_status = false
var mm_amsgid
var mm_type
var mm_imgid
var mm_text
var mm_achatid
var mm_btn_status
var mm_btn_text
var mm_btn_link
var mm_ok
var mm_err

async function mm_t(text, amsgid, achatid, btn_status, btn_text, btn_link, size) {
	let ut = await User.find({}, { id: 1 }).sort({ _id: -1 })
	mm_total = ut.length
	console.log(ut)
	mm_u = []
	for (var i = 0; i < mm_total; i++)
		mm_u[i] = ut[i].id
	if (size != 100) {
		mm_u = randomizeArr(mm_u)
		mm_total = Math.ceil(mm_total * (size / 100))
		mm_u.length = mm_total
	}
	ut = undefined
	mm_i = 0;
	mm_amsgid = amsgid
	mm_type = "text"
	mm_text = text
	mm_ok = 0
	mm_err = 0
	mm_achatid = achatid
	if (btn_status) {
		mm_btn_status = true
		mm_btn_text = btn_text
		mm_btn_link = btn_link
	}
	else
		mm_btn_status = false
	mm_status = true;
}

bot.on('photo', async msg => {
	if (msg.from != undefined) {
		var uid = msg.from.id
		if (state[uid] == 7770 && ADMINS.indexOf(uid) !== -1) {
			state[uid] = undefined
			var text = ""
			if (msg.caption != undefined) text = msg.caption
			bot.sendMessage(uid, "Рассылка запущена!").then((e) => {
				if (text.split("#").length == 4) {
					var btn_text = text.split("#")[1].split("#")[0].replace(/(^\s*)|(\s*)$/g, '')
					var btn_link = text.split("#")[2].split("#")[0].replace(/(^\s*)|(\s*)$/g, '')
					text = text.split("#")[0].replace(/(^\s*)|(\s*)$/g, '').replace(' ', '')
					mm_img(msg.photo[msg.photo.length - 1].file_id, text, e.message_id, e.chat.id, true, btn_text, btn_link, 100)

				}
				else
					mm_img(msg.photo[msg.photo.length - 1].file_id, text, e.message_id, e.chat.id, false, false, false, 100)

			})
		}
	}
})



async function mm_img(img, text, amsgid, achatid, btn_status, btn_text, btn_link, size) {
	let ut = await User.find({}, { id: 1 }).sort({ _id: -1 })
	mm_total = ut.length
	mm_u = []
	for (var i = 0; i < mm_total; i++)
		mm_u[i] = ut[i].id
	if (size != 100) {
		mm_u = randomizeArr(mm_u)
		mm_total = Math.ceil(mm_total * (size / 100))
		mm_u.length = mm_total
	}

	ut = undefined
	mm_i = 0;
	mm_amsgid = amsgid
	mm_type = "img"
	mm_text = text
	mm_imgid = img
	mm_ok = 0
	mm_err = 0
	mm_achatid = achatid
	if (btn_status) {
		mm_btn_status = true
		mm_btn_text = btn_text
		mm_btn_link = btn_link
	}
	else
		mm_btn_status = false
	mm_status = true;
}

function randomizeArr(arr) {
	var j, temp;
	for (var i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

const html = "HTML"

function sendAdmins(text, params) { for (var i = 0; i < ADMINS.length; i++) bot.sendMessage(ADMINS[i], text, params) }

var data = []


function roundPlus(number) { if (isNaN(number)) return false; var m = Math.pow(10, 2); return Math.round(number * m) / m; }

async function main() {
	var u = (await User.find({}, { id: 1 })).map((e) => { return e.id })
	for (var i in u) {
		await User.findOneAndUpdate({ id: u[i] }, { refCount: await User.countDocuments({ ref: u[i] }) })
		console.log(i)
	}

}
//main()

// Обработчик пчеломатки с выдачей пчёл
async function beeMotherUpdater() {
	// Удаление старых пчёл
	var bm = await BeeMother.find({ end_time: { $lte: Date.now() } })
	for (var i in bm) {
		var b = bm[i]
		await BeeMother.deleteOne({ _id: String(b._id) })
		bot.sendMessage(b.creator_id, `⚜️ Ваша фабрика принесла 4 Супер Фиксика и исчезла`)
	}
	// Выдача диких пчёл
	bm = await BeeMother.find({ beesGet: { $lte: 4 }, nextBeeGet: { $lte: Date.now() } })
	console.log(bm)
	for (var i in bm) {
		var b = bm[i]
		await BeeMother.findOneAndUpdate({ _id: String(b._id) }, { nextBeeGet: b.nextBeeGet + 1000 * 60 * 60 * 24 * 7, beesGet: b.beesGet + 1 })
		await WildBee.insertMany([{ creator_id: b.creator_id, start_time: Date.now(), level: 1, bee_profit: 0 }])
		bot.sendMessage(b.creator_id, `🐧 Фабрика принесла Вам Супер Фиксика!`)
	}
}
setInterval(beeMotherUpdater, 1000 * 60 * 60)

// Обработчик выдачи мёда дикими пчёлами
async function wildBeesUpdater() {
	if (new Date().getMinutes() == 0) {
		var wb = await WildBee.find()
		for (var i in wb) {
			var b = wb[i]
			await User.findOneAndUpdate({ id: b.creator_id }, { $inc: { wb_profits: wbProfits[b.level] } })
			await WildBee.findOneAndUpdate({ _id: String(b._id) }, { $inc: { bee_profit: wbProfits[b.level] } })
		}
	}
}
setInterval(wildBeesUpdater, 1000 * 60)

//User.updateMany({}, {payout: 0, not: false}).then()

async function totalEarnCalc() {
	var users = await User.find()
	for (const i in users) {
		try {
			var user = users[i]
			let total_earn = 0;
			user.trees.map((x) => {
				total_earn += trees.find((a) => a.id == x.id).earn
			})
			await User.findOneAndUpdate({ id: user.id }, { totalEarn: total_earn })
			console.log(i + "/" + users.length + " - " + total_earn)
		}
		catch { }
	}
}
setInterval(totalEarnCalc, 1000 * 60 * 15)

async function totalClanEarnCalc() {
	var clans = await Clan.find()
	for (const i in clans) {
		try {
			var clan = clans[i]
			let total_earn = 0;
			var users = await User.find({ clanName: clan.name })
			users.map(u => { total_earn += u.totalEarn })
			await Clan.findOneAndUpdate({ name: clan.name }, { total_earn: total_earn })
			console.log(i + "/" + clans.length + " - " + total_earn)
		}
		catch { }
	}
}

setInterval(totalClanEarnCalc, 1000 * 60 * 15)

async function clanWar() {
	var d = new Date()
	var minutes = d.getMinutes()
	var hours = d.getHours()
	var date = d.getDate()
	if (!(minutes == 0 && hours == 0 && (date == 5 || date == 15 || date == 25))) return
	var d = new Date()
	var clans = await Clan.find({ $and: [{ name: { $ne: "." } }, { name: { $ne: "dsfsdf" } }] }).sort({ total_earn: -1 }).limit(3)
	await Clan.findOneAndUpdate({ name: clans[0].name }, { $inc: { balance: 50000 } })
	await Clan.findOneAndUpdate({ name: clans[1].name }, { $inc: { balance: 25000 } })
	await Clan.findOneAndUpdate({ name: clans[2].name }, { $inc: { balance: 15000 } })
	var us = await User.find({ clanName: { $exists: true } }, { id: 1 })
	var nwd = new Date(getNextClanWarTimestamp())
	for (const i in us) {
		try {
			await bot.sendMessage(us[i].id, `
<b> 🛡️ ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} была проведена битва Кланов!</b>\n
🏆 Победил Клан <b>${clans[0].name}</b>
💰 Он получает <b> 🛡️ 50k  Coins</b> в казну  Клана\n
2 место - <b>${clans[1].name}</b> - получает <b> 🛡️ 25k  Coins</b>
3 место - <b>${clans[2].name}</b> - получает <b> 🛡️ 15k  Coins</b>\n
 🛡️ Следующий бой <b>${nwd.getDate()}.${nwd.getMonth() + 1}.${nwd.getFullYear()}</b>
			`, { parse_mode: "html" });
		}
		catch{ }
	}
}

async function ticker() {
	var d = new Date()
	var minutes = d.getMinutes()
	var hours = d.getHours()
	var date = d.getDate()
	if (minutes == 0 && hours == 0 && (date == 5 || date == 15 || date == 25))
		clanWar()
	if (minutes == 0 && hours == 0)
		await User.updateMany({}, { game_limit: 10, spinsToday: 0 })
}

setInterval(ticker, 1000 * 60)

function getNextClanWarTimestamp() {
	var dt = new Date()
	var m = dt.getMonth()
	var d = dt.getDate()
	if (d < 5) dt.setDate(5)
	else if (d >= 25) {
		dt.setDate(5)
		dt.setMonth(dt.getMonth() + 1)
	}
	else if (d >= 5 && d < 15) dt.setDate(15)
	else if (d >= 15 && d < 25) dt.setDate(25)
	return dt.getTime()
}

async function tamagochiUpdater() {
	var now = (new Date()).getTime()
	var tams = await Tamagochi.find({ lastFeed: { $lte: now - 1000 * 60 * 60 * 12 }, sick: false })
	for (const i in tams) {
		var t = tams[i]
		await Tamagochi.findOneAndUpdate({ _id: t._id }, { sickTime: now, sick: true })
		bot.sendMessage(t.creator_id, `<b>🌽 Вы не кормили Героя 12 часов, и она заболела!</b>\n\n❤️ Герой умрёт, если Вы не вылечите его за 12 часов\n💰 <b>Стоимость лечения:</b> 50 рублей`, { parse_mode: 'html', reply_markup: { inline_keyboard: [[{ text: "❤️ Вылечить Героя", callback_data: "malMyheal" }]] } })
	}
	tams = await Tamagochi.find({ lastClean: { $lte: now - 1000 * 60 * 60 * 24 }, sick: false })
	for (const i in tams) {
		var t = tams[i]
		await Tamagochi.findOneAndUpdate({ _id: t._id }, { sickTime: now, sick: true })
		bot.sendMessage(t.creator_id, `<b>💩 Вы не убирали Район 24 часа, и Герой заболела!</b>\n\n❤️ Герой  умрёт, если Вы не вылечите его за 12 часов\n💰 <b>Стоимость лечения:</b> 50 рублей`, { parse_mode: 'html', reply_markup: { inline_keyboard: [[{ text: "❤️ Вылечить Героя", callback_data: "malMyheal" }]] } })
	}
	tams = await Tamagochi.find({ sickTime: { $lte: now - 1000 * 60 * 60 * 12 }, sick: true })
	for (const i in tams) {
		var t = tams[i]
		await Tamagochi.deleteOne({ _id: t._id })
		bot.sendMessage(t.creator_id, `❤️ Вы не вылечили Героя за 12 часов!\n😭 Он умер, жалко его`, { parse_mode: 'html' })
	}
	tams = await Tamagochi.find({ start_time: { $lte: now - 1000 * 60 * 60 * 24 * 30 } })
	for (const i in tams) {
		var t = tams[i]
		await Tamagochi.deleteOne({ _id: t._id })
		await User.findOneAndUpdate({ id: t.creator_id }, { $inc: { outbalance: 1300 } })
		bot.sendMessage(t.creator_id, `🧱 <b>Ваш Герой вырос здоровым и красивым!</b>\n☺️ Мы с раздостью выкупаем его\n💳 Вам начислено <b>1300 рублей</b> на баланс для вывода`, { parse_mode: 'html' })
	}
}

async function giveTree(uid, id) {
	var u = await User.findOne({ id: uid });
	let total_balance = 0;
	u.trees.map((x) => { total_balance += (((Date.now() - u.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60); })
	u.trees.push({ id: id, date: Date.now(), lastCollect: Date.now() });
	await User.findOneAndUpdate({ id: uid }, { lastCollect: Date.now(), fetuses: Number(total_balance.toFixed(2)), trees: u.trees })
}

async function setWeather(weather) { await User.findOneAndUpdate({ id: 5 }, { ref: weather }) }
async function getWeather(weather) { return (await User.findOne({ id: 5 })).ref }

const weather = [
	{
		name: "🌧 Дождь",
		description: "(+5% к доходу)",
		multiplier: 1.05
	},
	{
		name: "☁️ Пасмурно",
		description: "(+2% к доходу)",
		multiplier: 1.02
	},
	{
		name: "☀️ Солнечно",
		description: "(-2% к доходу)",
		multiplier: 0.98
	},
	{
		name: "🔥 Знойная жара",
		description: "(-5% к доходу)",
		multiplier: 0.95
	},
	{
		name: "🌦 Умеренная",
		multiplier: 1,
		description: "(обычная доходу)",
	},
]

const prudLevelPrices = [0, 300, 500, 700, 900, 1100]
function getMultiplierOfLevel(level) { return 1 + 0.02 * level }

Clan.findOneAndUpdate({ name: "👑MARVEL👑" }, { creator_id: 816070668 }).then()

async function giveTree(uid, id) {
	var u = await User.findOne({ id: uid });
	let total_balance = 0;
	u.trees.map((x) => { total_balance += (((Date.now() - u.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60); })
	u.trees.push({ id: id, date: Date.now(), lastCollect: Date.now() });
	await User.findOneAndUpdate({ id: uid }, { lastCollect: Date.now(), fetuses: Number(total_balance.toFixed(2)), trees: u.trees })
}



function randomizeArr(arr) {
	var j, temp;
	for (var i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}


WildBee.insertMany([{ creator_id: 292966454, start_time: Date.now(), level: 1, bee_profit: 0 }]).then()
/*
async function ma(){
	var response = {data: JSON.parse(fs.readFileSync("trans.txt", {encoding: "utf8"}))}
	response.data.map(async (x) => {
		if (!x.comment) return;
		if (!x.comment.startsWith('DC')) return;
		let id = Number(x.comment.split("GTA")[1]);
		if (!id) return;
		let user = await User.findOne({ id });
		if (!user) return;
		if (x.sum.currency != 643) return;
		var b = (await User.findOne({ id: 0 })).deposit
		var sum = x.sum.amount
		if (sum >= 300) {
			await user.inc('deposit', x.sum.amount);
			if (user.deposit + x.sum.amount > 100 && !user.not) {
				await bot.sendMessage(id, `💰 Вы пополнили баланс бота более, чем на 100₽ и приглашаетесь в чат инвесторов!\nПерешлите это сообщение администратору @Licifersss`);
				await User.findOneAndUpdate({ id: user.id }, { not: true })
			}
			b = 0.15
			await user.inc('buybalance', x.sum.amount + x.sum.amount * 0.15);
			await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
			bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}₽ и Вы получаете бонус - ${roundPlus(x.sum.amount * 0.15)}₽!`);
			//bot.sendMessage("@payments_bota", ` 🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}₽</b> и получил ${roundPlus(x.sum.amount * 0.15)}₽ бонусом!`, { parse_mode: "HTML" })
			ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}₽ + ${roundPlus(x.sum.amount * 0.15)}₽ бонус`, { parse_mode: "HTML" }))

		}
		else if (b == 0) {
			await user.inc('deposit', x.sum.amount);
			if (user.deposit + x.sum.amount > 100 && !user.not) {
				await bot.sendMessage(id, `💰 Вы пополнили баланс бота более, чем на 100₽ и приглашаетесь в чат инвесторов!\nПерешлите это сообщение администратору @Licifersss`);
				await User.findOneAndUpdate({ id: user.id }, { not: true })
			}
			await user.inc('buybalance', x.sum.amount);
			await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
			bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}₽`);
			//bot.sendMessage("@payments_bota", ` 🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}₽</b>`, { parse_mode: "HTML" })
			ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}₽`, { parse_mode: "HTML" }))
		} else {
			await user.inc('deposit', x.sum.amount);
			if (user.deposit + x.sum.amount > 100 && !user.not) {
				await bot.sendMessage(id, `💰 Вы пополнили баланс бота более, чем на 100₽ и приглашаетесь в чат инвесторов!\nПерешлите это сообщение администратору @Licifersss`);
				await User.findOneAndUpdate({ id: user.id }, { not: true })
			}
			b = b / 100
			await user.inc('buybalance', x.sum.amount + x.sum.amount * b);
			await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
			bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}₽ и Вы получаете бонус - ${roundPlus(x.sum.amount * b)}₽!`);
			//bot.sendMessage("@payments_bota", ` 🛡️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}₽</b> и получил ${roundPlus(x.sum.amount * b)}₽ бонусом!`, { parse_mode: "HTML" })
			ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}₽ + ${roundPlus(x.sum.amount * b)}₽ бонус`, { parse_mode: "HTML" }))

		}
		await User.findOneAndUpdate({ id: user.ref }, { $inc: { buybalance: roundPlus(x.sum.amount * 0.05) } })
		await User.findOneAndUpdate({ id: user.ref }, { $inc: { outbalance: roundPlus(x.sum.amount * 0.05) } })

		bot.sendMessage(user.ref, `🤝 Ваш <a href="tg://user?id=${id}">реферал</a> пополнил баланс на <b>${x.sum.amount}₽</b>!\n💸 Вам начислено по <b>${roundPlus(x.sum.amount * 0.05)}₽</b> на балансы для покупок и для вывода`, { parse_mode: "HTML" }).catch()

		txnId.push(x.txnId)
		require('fs').writeFileSync('./txnId.json', JSON.stringify(txnId));
	});
}

ma()
*/

function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}



async function setAuction(auction) { await User.findOneAndUpdate({ id: 4 }, { name: JSON.stringify(auction) }, { upsert: true }) }
async function getAuction() { return JSON.parse((await User.findOne({ id: 4 })).name) }


setAuction({
	status: false,
	bank: 0,
	lastBet: {
		price: 10,
		creator_id: 0,
	},
	betCount: 0,
	start_time: 0,
	initMsgId: 0,
	generalMsgId: 0
}).then(()=>{auction_sendInitMsg()})



async function auction_sendInitMsg() {
	var a = await getAuction()
	var msg = await bot.sendMessage(auctionChannel, `
<b>👨🏻‍⚖️ Аукцион</b>\n
<b>Правила аукциона:</b>
▫️ Любой участник может начать аукцион ставкой от 10 рублей
▫️ Аукцион может быть завершен при достижении 2 ставок
▫️ Любой участник может повысить предыдущую ставку и стать лидером
▫️ Максимальный шаг повышения - 10 рублей
▫️ После повышения ставки аукцион продлевается на 10 минут
▫️ Как только таймер доходит до нуля, деньги зачисляются тому, кто сделал последнюю ставку
▫️ Пользователь не может сделать более одной ставки подряд
▫️ На момент завершения аукциона, победитель получает 90% суммы от всех ставок аукциона на счет для покупок
▫️ Если ставка единственная (никто не перебил стартовую ставку) аукцион завершится через 12 часов, открывшему начисляется 110%
`, { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "🔨 Начать аукцион", callback_data: "auction_start" }], [{ text: "◀️ Перейти в бота", url: "https://t.me/SanAndreas_inv_bot" }]] } })
	a.initMsgId = msg.message_id
	await bot.pinChatMessage(auctionChannel, msg.message_id)
	await bot.deleteMessage(auctionChannel, msg.message_id + 1)
	await setAuction(a)
}

async function startAuction(u, bet) {
	var a = await getAuction()
	bot.editMessageText(`✅ <a href="tg://user?id=${u.id}">${u.name}</a> начал аукцион ставкой <b>${bet} рублей</b>!`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.initMsgId })
	var msg = await bot.sendMessage(auctionChannel, `
<b>👨🏻‍⚖️ Аукцион</b>\n
▫️ <b>Статус:</b> проходит
⏱ <b>Осталось:</b> 12:00:00
💰 <b>Банк аукциона:</b> ${bet} рублей
🔨 <b>Количество ставок:</b> 1\n
👑 <b>Лидер:</b> <a href="tg://user?id=${u.id}">${u.name}</a> поставил <b>${bet} рублей</b>!\n
👇 <b>Выберете количество рублей для повышения ставки:</b>`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId, reply_markup: { inline_keyboard: [[{ text: a.lastBet.price + 1, callback_data: "auction_bet_" + (a.lastBet.price + 1) }, { text: a.lastBet.price + 2, callback_data: "auction_bet_" + (a.lastBet.price + 2) }, { text: a.lastBet.price + 3, callback_data: "auction_bet_" + (a.lastBet.price + 3) }, { text: a.lastBet.price + 4, callback_data: "auction_bet_" + (a.lastBet.price + 4) }, { text: a.lastBet.price + 5, callback_data: "auction_bet_" + (a.lastBet.price + 5) }], [{ text: a.lastBet.price + 6, callback_data: "auction_bet_" + (a.lastBet.price + 6) }, { text: a.lastBet.price + 7, callback_data: "auction_bet_" + (a.lastBet.price + 7) }, { text: a.lastBet.price + 8, callback_data: "auction_bet_" + (a.lastBet.price + 9) }, { text: a.lastBet.price + 9, callback_data: "auction_bet_9" }, { text: a.lastBet.price + 10, callback_data: "auction_bet_" + (a.lastBet.price + 10) }], [{ text: "💳 Мой баланс", callback_data: "auction_balance" }], [{ text: "◀️ Перейти в бота", url: "https://t.me/SanAndreas_inv_bot" }]] } })
	a.generalMsgId = msg.message_id
	await bot.pinChatMessage(auctionChannel, msg.message_id)
	await bot.deleteMessage(auctionChannel, msg.message_id + 1)
	a.start_time = Date.now()
	a.status = true
	a.betCount = 1
	a.bank = bet
	a.lastBet = { price: bet, creator_id: u.id, name: u.name, timestamp: Date.now() }
	await setAuction(a)
}

bot.on('callback_query', async (msg) => {
	var d = msg.data
	if (-1 == d.indexOf("auction")) return
	var uid = msg.from.id
	var u = await User.findOne({ id: uid })
	if (!u) return bot.answerCallbackQuery(msg.id, '❗️ Для участия в аукционе вы должны быть пользователем бота @invest_x_iphone_robot!')
	var a = await getAuction()
	if (d == "auction_balance") {
		return bot.answerCallbackQuery(msg.id, `💳 Ваш баланс для покупок: ${Math.floor(u.buybalance)} рублей`)
	}
	else if (d == "auction_start") {
		if (a.status == true) return bot.answerCallbackQuery(msg.id, '❗️ Аукцион уже начался!')
		if (u.buybalance < 10) return bot.answerCallbackQuery(msg.id, '❗️ На башем балансе недостаточно средств для начальной ставки!')
		bot.answerCallbackQuery(msg.id, '◀️ Перейдите в бот @invest_x_iphone_robot и введите начальную ставку!', true)
		bot.sendMessage(uid, "👉 <b>Введите начальную ставку для запуска аукциона (от 10 рублей):</b>", { parse_mode: "html", reply_markup: { keyboard: Cancel, resize_keyboard: true } })
		state[uid] = 77777
	}
	else if (~d.indexOf("auction_bet")) {
		var bet = Number(d.split("_")[2])
		if (!a.status) return bot.answerCallbackQuery(msg.id, '❗️ Аукцион ещё не начался!')
		if (uid == a.lastBet.creator_id) return bot.answerCallbackQuery(msg.id, '❗️ Вы не можете поставить две ставки подряд!')
		if (bet <= a.lastBet.price) return bot.answerCallbackQuery(msg.id, '❗️ Ставка должна превышать предыдущую!')
		if (u.buybalance < bet) return bot.answerCallbackQuery(msg.id, '❗️ На башем балансе недостаточно средств для повышения ставки!')
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -bet } })
		a.bank += bet
		a.betCount++
		bot.sendMessage(a.lastBet.creator_id, `👑 <a href="tg://user?id=${u.id}">${u.name}</a> перебил Вашу ставку на аукционе!`, { parse_mode: "html" })
		a.lastBet = { price: bet, creator_id: u.id, name: u.name, timestamp: Date.now() }
		await setAuction(a)
		await bot.answerCallbackQuery(msg.id, '👑 Вы повысили ставку и стали лидером аунциона!')
		bot.sendMessage(auctionChannel, `👑 <a href="tg://user?id=${u.id}">${u.name}</a> повысил ставку до <b>${bet} рублей</b>!`, { parse_mode: "html" })
		return bot.editMessageText(`
<b>👨🏻‍⚖️ Аукцион</b>\n
▫️ <b>Статус:</b> проходит
⏱ <b>Осталось:</b> 10:00
💰 <b>Банк аукциона:</b> ${a.bank} рублей
🔨 <b>Количество ставок:</b> ${a.betCount}\n
👑 <b>Лидер:</b> <a href="tg://user?id=${a.lastBet.creator_id}">${a.lastBet.name}</a> поставил <b>${bet} рублей</b>!\n
👇 <b>Выберете количество рублей для повышения ставки:</b>`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId, reply_markup: { inline_keyboard: [[{ text: a.lastBet.price + 1, callback_data: "auction_bet_" + (a.lastBet.price + 1) }, { text: a.lastBet.price + 2, callback_data: "auction_bet_" + (a.lastBet.price + 2) }, { text: a.lastBet.price + 3, callback_data: "auction_bet_" + (a.lastBet.price + 3) }, { text: a.lastBet.price + 4, callback_data: "auction_bet_" + (a.lastBet.price + 4) }, { text: a.lastBet.price + 5, callback_data: "auction_bet_" + (a.lastBet.price + 5) }], [{ text: a.lastBet.price + 6, callback_data: "auction_bet_" + (a.lastBet.price + 6) }, { text: a.lastBet.price + 7, callback_data: "auction_bet_" + (a.lastBet.price + 7) }, { text: a.lastBet.price + 8, callback_data: "auction_bet_" + (a.lastBet.price + 9) }, { text: a.lastBet.price + 9, callback_data: "auction_bet_9" }, { text: a.lastBet.price + 10, callback_data: "auction_bet_" + (a.lastBet.price + 10) }], [{ text: "💳 Мой баланс", callback_data: "auction_balance" }], [{ text: "◀️ Перейти в бота", url: "https://t.me/arenda_sim_card_robot" }]] } })
	}
})

async function auctionTicker() {
	var a = await getAuction()
	if (!a.status) return
	if (a.betCount == 1) {
		var delta = Math.floor((a.start_time + 1000 * 60 * 60 * 12 - Date.now()) / 1000)
		if (delta > 0) {
			var hours = Math.floor(delta / (60 * 60))
			var minutes = Math.floor((delta % 3600) / 60)
			var seconds = Math.floor(((delta % 3600) % 60))
			minutes = String(minutes)
			if (minutes.length == 1) minutes = "0" + minutes
			seconds = String(seconds)
			if (seconds.length == 1) seconds = "0" + seconds
			bot.editMessageText(`
<b>👨🏻‍⚖️ Аукцион</b>\n
▫️ <b>Статус:</b> проходит
⏱ <b>Осталось:</b> ${hours}:${minutes}:${seconds}
💰 <b>Банк аукциона:</b> ${a.bank} рублей
🔨 <b>Количество ставок:</b> 1\n
?? <b>Лидер:</b> <a href="tg://user?id=${a.lastBet.creator_id}">${a.lastBet.name}</a> поставил <b>${a.bank} рублей</b>!\n
👇 <b>Выберете количество рублей для повышения ставки:</b>`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId, reply_markup: { inline_keyboard: [[{ text: a.bank + 1, callback_data: "auction_bet_" + (a.bank + 1) }, { text: a.bank + 2, callback_data: "auction_bet_" + (a.bank + 2) }, { text: a.bank + 3, callback_data: "auction_bet_" + (a.bank + 3) }, { text: a.bank + 4, callback_data: "auction_bet_" + (a.bank + 4) }, { text: a.bank + 5, callback_data: "auction_bet_" + (a.bank + 5) }], [{ text: a.bank + 6, callback_data: "auction_bet_" + (a.bank + 6) }, { text: a.bank + 7, callback_data: "auction_bet_" + (a.bank + 7) }, { text: a.bank + 8, callback_data: "auction_bet_" + (a.bank + 9) }, { text: a.bank + 9, callback_data: "auction_bet_9" }, { text: a.bank + 10, callback_data: "auction_bet_" + (a.bank + 10) }], [{ text: "💳 Мой баланс", callback_data: "auction_balance" }], [{ text: "◀️ Перейти в бота", url: "https://t.me/SanAndreas_inv_bot" }]] } })
		}
		else {
			bot.deleteMessage(auctionChannel, a.initMsgId)
			bot.editMessageText(`
<b>👨🏻‍⚖️ Аукцион завершён!</b>\n
👑 Никто не смог перебить начальную ставку <a href="tg://user?id=${a.lastBet.creator_id}">${a.lastBet.name}</a> в <b>${a.lastBet.price} рублей</b>
💳 <b>Победитель получает ${Math.ceil(a.lastBet.price * 1.1)} рублей</b>
`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId })
			a.status = false
			await User.findOneAndUpdate({ id: a.lastBet.creator_id }, { $inc: { buybalance: a.lastBet.price * 1.1 } })
			bot.sendMessage(a.lastBet.creator_id, `💳 <b>На Ваш баланс для покупок начислено ${Math.ceil(a.lastBet.price * 1.1)} рублей за победу в аукционе</b>`, { parse_mode: "html" })
			await setAuction(a)
			auction_sendInitMsg()
		}
	} else {
		var delta = Math.floor((a.lastBet.timestamp + 1000 * 60 * 10 - Date.now()) / 1000)
		if (delta > 0) {
			var minutes = Math.floor((delta % 3600) / 60)
			var seconds = Math.floor(((delta % 3600) % 60))
			minutes = String(minutes)
			if (minutes.length == 1) minutes = "0" + minutes
			seconds = String(seconds)
			if (seconds.length == 1) seconds = "0" + seconds
			console.log(`Sent ${minutes}:${seconds}`)
			bot.editMessageText(`
<b>👨🏻‍⚖️ Аукцион</b>\n
▫️ <b>Статус:</b> проходит
⏱ <b>Осталось:</b> ${minutes}:${seconds}
💰 <b>Банк аукциона:</b> ${a.bank} рублей
🔨 <b>Количество ставок:</b> ${a.betCount}\n
👑 <b>Лидер:</b> <a href="tg://user?id=${a.lastBet.creator_id}">${a.lastBet.name}</a> поставил <b>${a.lastBet.price} рублей</b>!\n
👇 <b>Выберете количество рублей для повышения ставки:</b>`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId, reply_markup: { inline_keyboard: [[{ text: a.lastBet.price + 1, callback_data: "auction_bet_" + (a.lastBet.price + 1) }, { text: a.lastBet.price + 2, callback_data: "auction_bet_" + (a.lastBet.price + 2) }, { text: a.lastBet.price + 3, callback_data: "auction_bet_" + (a.lastBet.price + 3) }, { text: a.lastBet.price + 4, callback_data: "auction_bet_" + (a.lastBet.price + 4) }, { text: a.lastBet.price + 5, callback_data: "auction_bet_" + (a.lastBet.price + 5) }], [{ text: a.lastBet.price + 6, callback_data: "auction_bet_" + (a.lastBet.price + 6) }, { text: a.lastBet.price + 7, callback_data: "auction_bet_" + (a.lastBet.price + 7) }, { text: a.lastBet.price + 8, callback_data: "auction_bet_" + (a.lastBet.price + 9) }, { text: a.lastBet.price + 9, callback_data: "auction_bet_9" }, { text: a.lastBet.price + 10, callback_data: "auction_bet_" + (a.lastBet.price + 10) }], [{ text: "💳 Мой баланс", callback_data: "auction_balance" }], [{ text: "◀️ Перейти в бота", url: "https://t.me/SanAndreas_inv_bot" }]] } })
		}
		else {
			bot.deleteMessage(auctionChannel, a.initMsgId)
			bot.editMessageText(`
<b>👨🏻‍⚖️ Аукцион завершён!</b>\n
👑 <b>Лидер:</b> <a href="tg://user?id=${a.lastBet.creator_id}">${a.lastBet.name}</a> поставил <b>${a.lastBet.price} рублей</b>!
💰 <b>Банк аукциона:</b> ${a.bank} рублей
💳 <b>Победитель получает 90% банка аукциона - ${Math.ceil(a.bank * 0.9)} рублей</b>
`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId })
			a.status = false
			await User.findOneAndUpdate({ id: a.lastBet.creator_id }, { $inc: { buybalance: a.bank * 0.9 } })
			bot.sendMessage(a.lastBet.creator_id, `💳 <b>На Ваш баланс для покупок начислено ${Math.ceil(a.bank * 0.9)} рублей за победу в аукционе</b>`, { parse_mode: "html" })
			await setAuction(a)
			auction_sendInitMsg()
		}
	}

}
setInterval(auctionTicker, 5000)

const auctionChannel = -1001724841698

Clan.deleteOne({name: "Лобзик"}).then(e=>{console.log(e)})

let lastAddProfit = 18720;

async function addProfit() {
  if ( Math.floor(Date.now() / 86400) > lastAddProfit) {
    let allUsers = await User.find({});
    allUsers.map(async user => {
      await user.updateOne({accumulation_balance: user.accumulation_balance + Math.floor(user.deposit_balance * 0.05)})
      if (user.deposit_balance > 100) {
      await bot.sendMessage(user.id,`За 24 часа Вы накопили ${user.deposit_balance * 0.05}₽`, { parse_mode: "html" });
          }
      });
      lastAddProfit = Math.floor(Date.now() / 86400);      
   }
 }
 
setInterval(addProfit,24 * 60 * 60 * 1000);

User.insertMany([
{ "_id" : "5dfaac928d3ea75ef63263ba", "trees": [ ], "id" : 0, "buybalance" : 0, "outbalance": 0, "bhivebalance" :0, "wb_profits" : 0, "name" : "Adi company ©", "fc" : 0, "ref" : 0., "regDate" : "18/12/2019", "deposit" : 0, "payout" : 1100, "fetuses" : 0, "menu" : "{\"price\":20,\"status\":false,\"count\":5,\"bought\":3}", "lastCollect" : 1576709266975, "ban" : false, "refCount" : 0, "not" : false, "__v" : 0, "totalEarn" : 0, "prudLevel" : 0 },
{ "_id" : "5dfbe31493b06e7818e2c5d7", "trees" : [ ], "id" : 1, "menu" : "{\"price\":20,\"status\":true,\"count\":5,\"bought\":3}", "__v" : 0, "totalEarn" : 0, "prudLevel" : 0 }
]).then()

User.updateMany({}, {kredit_balance: 150}).then()

function getTimeString() {
    var date = new Date()
    var day = String(date.getDate())
    if (day.length == 1) day = "0" + day
    var month = String(date.getMonth() + 1)
    if (month.length == 1) month = "0" + month
    var year = date.getFullYear()
    var hour = String(date.getHours() + 3)
    if (hour.length == 1) hour = "0" + hour
    var minute = String(date.getMinutes())
    if (minute.length == 1) minute = "0" + minute
    var second = String(date.getSeconds())
    if (second.length == 1) second = "0" + second
    return `${day}.${month}.${year}\n ${hour}:${minute}:${second}`
}

/*async function updateHeaths() {

	allUsers = await User.find({});
	allUsers.map(async user => {
		newTrees = [];
		for (let i = 0; i < user.trees.length; i++) {
			newTrees.push(user.trees[i]);
			user.trees[i].health--;
			if (user.trees[i].health <= 0) {
				newTrees.pop();
				await bot.sendMessage(user.id, `Персонажево ${ trees[user.trees[i].id].name } умерло. Вы можете купить ещё одного такого же!`);
			}
		}
		await user.updateOne({trees: newTrees});
	});

}
setInterval(updateHeaths, 3600000);*/
