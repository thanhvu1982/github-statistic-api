export interface GetContributionsDto {
  username: string;
  year?: number;
  format: 'array' | 'object';
  allYears?: boolean;
}
