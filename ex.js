var a, b, c, d, e;
a = parseInt(prompt("Nhap diem mon Vat ly cua hoc sinh"));
b = parseInt(prompt("Nhap diem mon Hoa hoc cua hoc sinh"));
c = parseInt(prompt("Nhap diem mon Sinh hoc cua hoc sinh"));
d = a + b + c;
e = d / 3;
document.write("Tong tat ca cac diem cua hoc sinh = " + d);
document.write("<br/>")
document.write("Diem trung binh cong cua hoc sinh = " + e);
