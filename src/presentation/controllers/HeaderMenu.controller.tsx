import {
  HeaderMenuView,
  HeaderMenuViewProps,
} from '../components/views/HeaderMenu.view';

export const HeaderMenuController = ({
  headerMenuOptions,
}: HeaderMenuViewProps) => {
  return <HeaderMenuView headerMenuOptions={headerMenuOptions} />;
};
