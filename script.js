function check(){
  let repeat=[]
    let city = ['Абакан','Архангельск','Анапа','Азов','Артём','Бийск','Братислава','Берлин','Балаково','Белгород','Белово','Волжск','Выборг','Варшава','Воронеж','Волгоград','Воркута','Вольск',
    'Гатчина','Грозный','Георгиевск','Геледжик','Губкин','Гуково','Домодедово','Дубна','Дербент','Донецк',
    'Евпатория','Ейск','Екатеринбург','Елец',
    'Жуковский','Жигулёвск','Железногорск',
    'Заречный','Зеленогорск','Зеленодольск','Златоуст',
    'Иваново','Ивантеевка','Ижевск','Иркутск','Ишим','Ишимбай',
    "Йошкар-Ола",'Казань','Кемерово','Красноярск','Краснодар','Киев','Киров','Кызыл','Калининград','Калуга','Краснокамск','Липецк','Лейпциг','Лесобирск',
    'Махачкала','Междуреченск','Магадан','Москва','Мурино','Мурманск',
    'Новосибирск','Новороссийск','Новокуйбышевск','Новокузнецк','Назрань',
    'Омск','Орск','Оренбург','Павловский Посад','Пенза',' Первоуральск',' Пермь',
    ' Петрозаводск','Павлово','Псков','Петропавловск-Камчатский','Прокопьевск','Пушкино','Ревда','Ростов-на-Дону'
    ,'Рязань','Рыбинск','Рославль','Салават','Сальск','Самара','Санкт-Петербург','Питер','Саратов','Севастополь','Симферополь','Смоленск',
    'Сертолово','Солнечногорск','Саров','Смоленск','Сочи','Якутск','Ялта','Ярославль','Таганрог','Тамбов','Тверь','Тимашевск','Тихвин','Тихорецк','Тобольск','Тольятти','Томск','Троицк','Туапсе','Туймазы','Тула','Тюмень',
    'Узловая','Улан-Удэ','Ульяновск','Урус-Мартан','Усолье-Сибирское','Уссурийск','Усть-Илимск','Уфа','Ухта',
    'Феодосия','Фрязино',
'Хабаровск','Ханты-Мансийск','Хасавюрт','Химки','Харьков',
'Чайковский','Чапаевск','Чебоксары','Челябинск','Черемхово','Череповец','Черкесск','Черногорск','Чехов','Чистополь','Чита',
'Шадринск','Шали','Шахты','Шуя',
'Щекино','Обнинск','Вологда','Дубна',
'Одинцово','Житомир','Озерск','Ярославл','Ярославль','Магнитогорск',"Гагра",'Сухум','Варшава','Воронеж','Волгоград','Воркута','Вольск','Владивосток','Вологда','Владивосток'
  ];
  
  let str = document.getElementById("input");
let out = document.getElementById("out");




// repeat.push(str.value);
// alert(repeat)




// if(city.includes(repeat)){
//   alert("Город уже вводили")
//  }




let a = ['Абакан','Архангельск','Анапа','Азов','Артём','Арзамас']
let b = ['Бийск','Братислава','Берлин','Балаково','Белгород','Белово','Волжск','Выборг','Балашиха']
let v = ['Варшава','Воронеж','Волгоград','Воркута','Вольск','Владивосток','Вологда','Владивосток']
let g = ['Гатчина','Грозный','Георгиевск','Геледжик','Губкин','Гуково',"Гагра"]
let d = ['Домодедово','Дубна','Дербент','Донецк']
let e = ['Евпатория','Ейск','Екатеринбург','Елец']
let j = ['Жуковский','Жигулёвск','Железногорск','Житомир']
let z = ['Заречный','Зеленогорск','Зеленодольск','Златоуст']
let i = ['Иваново','Ивантеевка','Ижевск','Иркутск','Ишим','Ишимбай']
let i_q = ["Йошкар-Ола"]
let k = ['Казань','Казань','Кемерово','Красноярск','Краснодар','Киров','Кызыл','Калининград','Калуга','Краснокамск']
let l = ['Липецк','Лейпциг','Лесобирск']
let m = ['Махачкала','Междуреченск','Магадан','Москва','Мурино','Мурманск','Магнитогорск','Мариинск']
let n = ['Новосибирск','Новороссийск','Новокуйбышевск','Новокузнецк','Новошахтинск','Новый Уренгой','Ногинск','Норильск','Ноябрьск','Назрань','Нижний-Новгород','Нижний Новгород',
'Нягань']
let o = ['Одесса','Омск','Орск','Оренбург','Одинцово','Обнинск','Одинцово','Озерск']
let p = ['Павловский Посад','Пенза',' Первоуральск',' Пермь',' Петрозаводск','Павлово','Псков','Петропавловск-Камчатский','Санкт-Петербург','Питер','Прокопьевск','Пушкино']
let r = ['Рязань','Рыбинск','Рославль','Реутов','Ржев','Раменское','Рубцовск']
let s = ['Салават','Сальск','Самара','Санкт-Петербург','Саров','Сертолово','Солнечногорск','Смоленск','Сочи','Старый Оскол','Сызрань','Ступино','Сухум']
let t = ['Тольятти','Топки','Таганрог','Тамбов','Тверь','Тимашевск','Тихвин','Тихорецк','Тобольск','Тольятти','Томск','Троицк','Туапсе','Туймазы','Тула','Тюмень']
let y = ['Узловая','Улан-Удэ','Ульяновск','Урус-Мартан','Усолье-Сибирское','Уссурийск','Усть-Илимск','Уфа','Ухта']
let f = ['Феодосия','Фрязино']
let h = ['Хабаровск','Ханты-Мансийск','Хасавюрт','Химки','Харьков']
let ch = ['Чайковский','Чапаевск','Чебоксары','Челябинск','Черемхово','Череповец','Черкесск','Черногорск','Чехов','Чистополь','Чита']
let sh = ['Шадринск','Шали','Шахты','Шуя']
let sh_sh = ['Щекино',
'Щелково']
let il = ['Электросталь','Элиста','Энгельс']
let you =  ['Южно-Сахалинск','Юрга']
let ia = ['Якутск','Ялта','Ярославль','Ярославл']



function checking(){

  // a.splice(str.value)
  // b.splice(str.value)
  // v.splice(str.value)
  // g.splice(str.value)
  // d.splice(str.value)
  // e.splice(str.value)
  // j.splice(str.value)
  // z.splice(str.value)
  // i.splice(str.value)
  // i_q.splice(str.value)
  
//  l.splice(str.value)
//   m.splice(str.value)
//   n.splice(str.value)
//   o.splice(str.value)
//   p.splice(str.value)
//   r.splice(str.value)
//   s.splice(str.value)

  switch (str.value[str.value.length - 1 ]) {
    
    case 'а' : out.innerHTML=   a[Math.floor(Math.random() * a.length)]
    break
    case 'б' :  out.innerHTML=   b[Math.floor(Math.random() * b.length)]
    break
    case 'в' :   out.innerHTML=   v[Math.floor(Math.random() * v.length)]
    break
    case 'г' :   out.innerHTML=   g[Math.floor(Math.random() * g.length)]
    break
    case 'д' :   out.innerHTML=   d[Math.floor(Math.random() * d.length)]
    break
    case 'e' :   out.innerHTML=   e[Math.floor(Math.random() * e.length)]
    break
    case 'ё' :   out.innerHTML=   v[Math.floor(Math.random() * v.length)]
    break
    case 'ж' :   out.innerHTML=   j[Math.floor(Math.random() * j.length)]
    break
    case 'з' :   out.innerHTML=   v[Math.floor(Math.random() * v.length)]
    break
    case 'и' :   out.innerHTML=   i[Math.floor(Math.random() * i.length)]
    break
    case 'й' :   out.innerHTML=   i_q[Math.floor(Math.random() * i_q.length)]
    break
    case 'к' :   out.innerHTML=    k[Math.floor(Math.random() * k.length)]
    break
    case 'л' :   out.innerHTML=   l[Math.floor(Math.random() * l.length)]
    break
    case 'м' :   out.innerHTML=   m[Math.floor(Math.random() * m.length)]
    break
    case 'н' :   out.innerHTML=   n[Math.floor(Math.random() * n.length)]
    break
    case 'о' :   out.innerHTML=   o[Math.floor(Math.random() * o.length)]
    break
    case 'п' :   out.innerHTML=   p[Math.floor(Math.random() * p.length)]
    break
    case 'р' :   out.innerHTML=   r[Math.floor(Math.random() * r.length)]
    break
    case 'с' :   out.innerHTML=   s[Math.floor(Math.random() * s.length)]
    break
    case 'т' :   out.innerHTML=   t[Math.floor(Math.random() * t.length)]
    break
    case 'у' :   out.innerHTML=   y[Math.floor(Math.random() * y.length)]
    break
    case 'ф' :   out.innerHTML=   f[Math.floor(Math.random() * f.length)]
    break
    case 'х' :   out.innerHTML=   h[Math.floor(Math.random() * h.length)]
    break
    case 'ц' :   out.innerHTML=   c[Math.floor(Math.random() * c.length)]
    break
    case 'ч' :   out.innerHTML=   ch[Math.floor(Math.random() * ch.length)]
    break

    case 'ш' :   out.innerHTML=   sh[Math.floor(Math.random() * sh.length)]
    break
    case 'щ' :  out.innerHTML=   sh_sh[Math.floor(Math.random() * sh_sh.length)]
    break
    case 'ы' : out.innerHTML=   iab[Math.floor(Math.random() * iab.length)]
    break
    case 'э' :  out.innerHTML=   il[Math.floor(Math.random() * il.length)]
    break
    case 'ю' :  out.innerHTML=   you[Math.floor(Math.random() * you.length)]
    break
    case 'я' :  out.innerHTML=   ia[Math.floor(Math.random() * ia.length)]
    break
    case 'з' :  out.innerHTML=   z[Math.floor(Math.random() * z.length)]
    break
   

case 'ь' : 





if(str.value == 'Ярославль'){
  out.innerHTML=   l[Math.floor(Math.random() * l.length)]
}



if(str.value == 'Астрахань'){
  out.innerHTML=   n[Math.floor(Math.random() * n.length)]
}

if(str.value == 'Назрань'){
  out.innerHTML=   n[Math.floor(Math.random() * n.length)]
}

if(str.value == 'Рязань'){
  out.innerHTML=   n[Math.floor(Math.random() * n.length)]
}

if(str.value == 'Севастополь'){
  out.innerHTML=   l[Math.floor(Math.random() * l.length)]
}


if(str.value == 'Пермь'){
  out.innerHTML=   m[Math.floor(Math.random() *m.length)]
}

}
}


// Новосибирск

if(city.includes(str.value)){
  checking()
  str.value = "";
}
else {
  alert("Такого города не существует или введите название города")

}


  }

