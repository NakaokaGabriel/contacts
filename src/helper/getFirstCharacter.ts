export function getFirstCharacter({ value }: { value: string }) {
  return value.split(' ').map(letter => letter.charAt(0)).join('').toLocaleUpperCase();
}