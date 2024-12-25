const banks = [
    { 'samaCode': '55', 'bankName': 'Banque Saudi Fransi', 'nameEn': 'Banque Saudi Fransi', 'nameAr': 'البنك السعودي الفرنسي' },
    { 'name': 'Alrajhi Bank', 'samaCode': '80', 'nameEn': 'Alrajhi Bank', 'nameAr': 'بنك الراجحي' },
    { 'samaCode': '10', 'bankName': 'National Commercial Bank', 'nameEn': 'National Commercial Bank', 'nameAr': 'البنك الأهلي التجاري' },
    { 'samaCode': '45', 'bankName': 'Saudi British Bank', 'nameEn': 'SABB', 'nameAr': 'ساب' },
    { 'samaCode': '20', 'bankName': 'Riyadh Bank', 'nameEn': 'Riyad Bank', 'nameAr': 'بنك الرياض' },
    { 'samaCode': '40', 'bankName': 'Saudi American Bank', 'nameEn': 'SAMBA', 'nameAr': 'سامبا' },
    { 'samaCode': '05', 'bankName': 'Alinma Bank', 'nameEn': 'Al Inma Bank', 'nameAr': 'بنك الانماء' },
    { 'samaCode': '50', 'bankName': 'Alawwal bank', 'nameEn': 'AlAwwal Bank', 'nameAr': 'البنك الأول' },
    { 'samaCode': '60', 'bankName': 'Bank AlJazira', 'nameEn': 'Bank Aljazerah', 'nameAr': 'بنك الجزيرة' },
    { 'samaCode': '65', 'bankName': 'Saudi Investment Bank', 'nameEn': 'Saudi Investment Bank', 'nameAr': 'البنك السعودي للأستثمار' },
    { 'samaCode': '15', 'bankName': 'Bank AlBilad', 'nameEn': 'BANK ALBELAD', 'nameAr': 'بنك البلاد' },
    { 'samaCode': '30', 'bankName': 'Arab National Bank', 'nameEn': 'Arab National Bank', 'nameAr': 'البنك العربي الوطني' },
    { 'samaCode': '90', 'bankName': 'GULF Bank', 'samaCode': 'GULFSARI', 'nameEn': 'Gulf International Bank', 'nameAr': 'بنك الخليج' },
    { 'samaCode': '95', 'bankName': 'Emirates Bank', 'nameEn': 'EMARITE BANK', 'nameAr': 'بنك الامارات' },
    { 'samaCode': '76', 'bankName': 'Bank Muscat', 'nameEn': 'Bank Muscat', 'nameAr': 'بنك مسقط' },
    { 'samaCode': '71', 'bankName': 'National Bank of Bahrain', 'nameEn': 'National Bank Of Bahrain', 'nameAr': 'بنك البحرين الوطني' },
    { 'samaCode': '75', 'bankName': 'National Bank of Kuwait', 'nameEn': 'National Bank of Kuwait', 'nameAr': 'بنك الكويت الوطني' },
    { 'samaCode': '85', 'bankName': 'BNP Paribas Bank', 'nameEn': 'BNP PARIBAS SAUDI ARABIA', 'nameAr': 'بي ان بي باريبوس' }
];

function CheckIban(iban) {
    if (!iban) return false;
    iban = iban.replaceAll(' ', '');
    return iban.length === 24 && iban.startsWith("SA");
}

function GetIban() {
    const iban = document.getElementById("iban").value;
    const result = document.getElementById("result");
    result.innerHTML = "";

    if (!CheckIban(iban)) {
        result.innerHTML = "الرجاء ادخال ايبان صالح ";
        return;
    }

    result.innerHTML = "ايبان صالح";
    const samaCode = iban.substring(4, 6);
    const bankname = banks.find(e => e.samaCode === samaCode);
    document.getElementById("bank").innerHTML = bankname ? bankname.nameAr : "";
    document.getElementById("bank1").innerHTML = " البنك";
}