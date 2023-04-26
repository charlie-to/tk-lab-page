interface IName {
  main: string;
  sub: string | null;
}

export interface IMemberFrontmatter {
  name: IName;
  major: string;
  grade: string;
}
