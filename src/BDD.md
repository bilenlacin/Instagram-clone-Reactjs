ANA AKIŞ SAYFASI YAP, -
BİR ALBÜMDE 1 DEN FAZLA RESİM VARSA SAĞA SOLA KAYDIRMAYI YAP +
ALBÜME YORUM POSTLAYABİL,(EMOJİ EKLEMEYE ÇALIŞ) +-
LİKE BUTONUNA BASINCA LİKE SAYISINI ARTIR, +
VİDEO OYNAT BUTONUNA TIKLAYINCA VİDEOYU OYNAT +
PROFİL İSMİNE TIKLANDIĞI ZAMAN PROFİL SAYFASINI AÇ -
PROFİLDEKİ HERHANGİ BİR FOTOYA TIKLANDIĞI ZAMAN EKRANDA BİR POP UP AÇIP ALBÜMÜ GÖSTER
PROFİL SAYFASINDAN KULLANICIYA MESAJ GÖNDER -
YENİ BİR POST EKLE AKIŞTA GÖRÜNSÜN

ÖRNEK BDD

given : kullanıcı tweetbara birşeyler yazar
when : tweetle butonuna basıldığında
then: atılan tweeti kullanıcı adı ve resmini kayıt etmek
and: atılan tweeti , kullanıcı adı ve kullanıcı resmini kullanıcıya göstermek

Profile Media Modal

Given: kullanıcı profideki resimlere tıklar
when : sayfa açıldığında
then: tıklanan resmi ve yorumları kullanıcıya göster

PROFILE MEDIA BDD
given : kullanıcı önerilerdeki isme tıklar
when : yönlendirilen sayfa yüklendiğinde
then : profildeki resmleri kullanıcıya göstermek

COMMENT DISPLAY BDD

given : kullanıcı tweetbara birşeyler yazar
when : tweetle butonuna basıldığında
then: atılan tweeti kullanıcı adı ve resmini kayıt etmek
and: atılan tweeti , kullanıcı adı ve kullanıcı resmini kullanıcıya göstermek
POST BDD

GİVEN
KULLANICI POSTBARA MESAJ YAZAR
WHEN
POST BUTONUNA BASILDIĞINDA
THEN
POSTUN KULLANICI ADINI VE POSTLANAN MESAJI KAYDETMEK
AND
POSTLAYAN KULLANICIYI VE POST MESAJINI KULLANICIYA GÖSTERMEK
AND
COMMENTQTY 2 DEN BÜYÜK İSE SON 2 TANESİNDEN ÖNCEKİ YORUMLARI GÖSTERMEMEK

NOTLAR;

Textarea nın Value sunu eklemedin
