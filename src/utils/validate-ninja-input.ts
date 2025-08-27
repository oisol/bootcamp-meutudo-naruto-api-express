import { NinjaInput } from '../types/Ninja';

// using type predicates to validate the input type
export function validateNinjaInput(input: any): input is NinjaInput {
  return (
    typeof input.name === 'string' &&
    typeof input.village === 'string' &&
    typeof input.occupation === 'string' &&
    typeof input.nation_id === 'number' &&
    typeof input.ninjutsu === 'number' &&
    typeof input.taijutsu === 'number' &&
    typeof input.genjutsu === 'number' &&
    typeof input.speed === 'number' &&
    typeof input.stamina === 'number'
  )
}

export function validateNinjaStats(input: NinjaInput): input is NinjaInput {
  const stats = [input.ninjutsu, input.taijutsu, input.genjutsu, input.speed, input.stamina];
  // every() test if all array elements pass the test implemented, like this the lambda function
  return stats.every(stat => stat >= 0 && stat <= 100);
}
