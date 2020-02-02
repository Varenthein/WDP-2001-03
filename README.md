


# WDP Projekt Zespołowy

## Opis projektu

Projekt jest przykładową stroną sklepu zakodowaną z darmowego szablonu PSD.
Projekt został stworzony w celu nauki kodowania stron oraz pracy w zespole.

## Demo

Demo projektu znajduje się pod poniższym linkiem:

[Furniture Shop](https://clever-khorana-32be99.netlify.com/)

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.

## Konwencje i dobre praktyki

- Struktura plików: grupowanie plików według funkcjonalności 
    - plik src dzieli się na components, redux oraz styles, nazwy plików odpowiadają konkretnym zawartościom
    - nazewnictwo w pliku components jest zgodne z notacją PascalCase, w pliku redux zastosowano camelCase
    - pliki .scss oraz .js są pogrupowane ze sobą zgodnie z powyższym
    - struktura pliku components dodatkowo została pogrupowana według funkcji jakie wykonują dane elementy

- Nazewnictwo klas : 
    - wg konwencji OOCSS

- Opis commitów: nazwa commit'a to również nazwa zadania, oraz branch'a w content informujemy jakie zmiany zostały dokonane, oraz dodajemy odpowiedni label.

- Strona pisana była zgodnie z zasadami KISS i DRY.






