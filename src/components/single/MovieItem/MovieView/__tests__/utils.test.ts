import { RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export async function handleSelectedDropdownItemTest(
  { container }: RenderResult,
  listItemNumber: number
) {
  await userEvent.hover(container.querySelector('.movie__item__container'));

  let actionsImg = screen.getAllByRole('img')[1] as HTMLImageElement;
  await userEvent.click(actionsImg);

  actionsImg = screen.getAllByRole('img')[1] as HTMLImageElement;
  expect(actionsImg).toBeUndefined();
  expect(screen.getByRole('list')).toBeInTheDocument();

  const dropDownItem = screen.getAllByRole('listitem')[
    listItemNumber
  ] as HTMLLIElement;
  await userEvent.click(dropDownItem);
}
