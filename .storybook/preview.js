/** @type { import('@storybook/react').Preview } */
import "../src/app/globals.css";
import { useRouter } from 'next/navigation';


const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
