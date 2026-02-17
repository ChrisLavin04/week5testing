//Name: Christopher Lavin 
//StudentID: S00251319
export class TestService {
  fullName(firstname: string, lastname: string): string {
    return `${lastname}, ${firstname}`;
  }

  compute(num: number): number {
    return num > 0 ? num : 0;
  }
}
