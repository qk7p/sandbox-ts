let currentId = 0;

export function getId(): number {
  return (currentId += 1);
}
