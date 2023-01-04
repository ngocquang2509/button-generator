import Sidebar from '.';
import { Meta } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

export const Default = () => <Sidebar />;
