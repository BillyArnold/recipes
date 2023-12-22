import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeIngredientDto {
  @ApiProperty()
  recipeId: number;

  @ApiProperty()
  units: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  ingredientID: number;
}
