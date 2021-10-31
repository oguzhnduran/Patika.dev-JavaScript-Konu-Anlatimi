// pop() Metodu

// pop() metodu dizinin son elemanını siler ve dizinin yapısını değiştirir. Aynı zamanda da diziden silinen elemanı döndürür.

let array = ["1", "2", "3"]
let silinenArray = array.pop() 
console.log(silinenArray) // "3"
console.log(array) // "1" "2"

  //*****************************************************************************************************************/

// unshift() Metodu 
//  Javascript de dizilerin başına eleman ya da elemanlar eklemek için unshift() metodunu kullanıyoruz. Metot diziye eleman ya da elemanlar eklerken dizinin yapısını değiştirir. push() metodu ile de sonuna ekleriz.
let dizi = ["6", "7", "8"]
dizi.unshift("5")
console.log(dizi) // ["5","6","7","8"]

  //*****************************************************************************************************************/

//  parseInt() Metodu

// parseInt() metodu, kendisine ondalıklı olarak verdiğiniz değerin ondalık kısmını siler ve kalan kısımdan yeni bir değişken oluşturarak döndürür. 
console.log(parseInt(78.5643)) //78

//parseInt(), veri türü ne olursa olsun girilen değeri number veri türüne dönüştürecektir. Yani string bir değer de girseniz işlem sonucu number olacaktır.
console.log(parseInt("123assd") ) //123

Input: var a = parseInt("1000");
Output: a = 1000(Number)

 //Buna ek olarak, fonksiyona girdiğiniz ikinci parametre ile dönüştürmek istediğiniz sayı sistemine dönüşüm yaptırabilirsiniz. Eğer ikinci parametre girilmezse default olarak onluk sayı sistemine dönüşüm olur.

 console.log(parseInt("15",8)) // 13 // 8'lik tabandan 10'luk tabana çeviriyor.

   /*****************************************************************************************************************/

// array.indexOf() ve array.lastIndexOf() Methodu

 // indexOf() metodu, var olan bir dizi içerisinde aradığımız bir elemanın indeks numarasını geriye döndürür.
 // Eğer aradığımız eleman dizi içerisinde yoksa geriye -1 değerini döndürür.

 // Syntax -> diziAdi.indexOf(aratilacak_deger,baslangic_indeksi);

 // Örnek 1
 var arabalar = ["Hyundai","Ford","Toyota","BMW","Ford"]; 
 
var indeks = arabalar.indexOf("Ford");
 
console.log(indeks); // 1

// Örnek 2
var arabalar = ["Hyundai","Ford","Toyota","BMW","Ford"]; 
 
var indeks = arabalar.indexOf("Ford",2);
 
console.log(indeks); //4, Başlangıç indeksi olarak 2 değeri verdiğimiz için ilk “Ford” elemanını geçip ikinci “Ford” elemanının indeks numarasını geriye döndürdü.

// Örnek 3 
var arabalar = ["Hyundai","Ford","Toyota","BMW","Ford"]; 
 
var indeks = arabalar.indexOf("Audi");
 
console.log(indeks); // -1 Gördüğünüz gibi “Audi” dizi içerisinde bulunmadığı için geriye -1 değeri döndürüldü.

// Örnek 4 lastIndexOf()

var arabalar = ["Hyundai","Ford","Toyota","Ford","BMW","Ford"]; 
 
var indeks = arabalar.lastIndexOf("Ford");
 
console.log(indeks); //5

   /*****************************************************************************************************************/

   // substr()

   //substr(), slice() ve substring() gibi string parçalama işlemlerinde kullanılır ancak diğer metotlardan farkı ikinci parametre başlangıçtan itibaren alınacak karakter sayısını temsil eder.

 // Örnek 
var str = "Mazda,Opel,Toyota";
var result = str.substr(6,4); // Opel

   /*****************************************************************************************************************/

  //toString()

  // toString() metodu, kendisine tanımlanan değişken değerini string olarak değiştirerek döndürür.

var sayi	=	22;
var cikti	=	sayi.toString();
console.log(cikti) //"22" number olan veri türünü stringe çevirdi.

// 10'luk tabandaki bir sayıyı string halde farklı tabanlara çevirir.

// Örnek 1
var sayi	=	22;
var cikti	=	sayi.toString(3);
console.log(cikti) // "211"

//Örnek 2
var sayi	=	22;
var cikti	=	sayi.toString(2);
console.log(cikti) // "10110"

 
  
 