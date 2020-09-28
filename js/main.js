function mathEquations(a, b) {
  if (a + b) {
    console.log(`Wynik dodawania zmiennych a=${a} + b=${b} wynosi ${a+b}.`);
  }
  if ((a - b) > 0) {
    console.log(`Wynik odejmowania a=${a} - b=${b} wynosi ${a-b}.`);
  }
  if ((b - a) > 0) {
    console.log(`Wynik odejmowania b=${b} - a=${a} wynosi ${b-a}.`)
  }
  if ((a * b) || (b * a)) {
    console.log(`Wynik mnozenia wynosi ${a * b || b* a}.`);
  }
  if ((b - a) < 0) {
    console.log(`Wynik nieprawidlowy.`);
  }
  if ((a - b) < 0) {
    console.log(`Wynik nieprawidlowy`);
  }
}

mathEquations(18, 2);