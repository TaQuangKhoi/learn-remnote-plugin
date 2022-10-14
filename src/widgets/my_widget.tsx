import { usePlugin, renderWidget } from '@remnote/plugin-sdk';

export const MyWidget = () => {
  return (
    <div>
      My Widget
    </div>
  );
};

renderWidget(MyWidget);