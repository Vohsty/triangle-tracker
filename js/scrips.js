
function create(a,b,c) {
  if (a+b>c && c+b>a && a+c>b && a==b && b==c)

      equi();

  else if (a+b>c && c+b>a && a+c>b && a==b || b==c || a==c)

    alert("scalene");
  else if (a+b>c && c+b>a && a+c>b && a!=b!=c)

    alert("scalene");
    else
    alert("Wacha ujinga");
    }
function equi() {
  window.location = "equilateral.html";

}
