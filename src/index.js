import textSVG from '@plone/volto/icons/subtext.svg';
import TextWithBackgroundColorView from './components/View';
import TextWithBackgroundColorEdit from './components/Edit';
import withStyleWrapper from './components/withStyleWrapper/withStyleWrapper';
import SimpleColorPicker from './components/Widgets/SimpleColorPicker';
import './theme/main.less';

export default (config) => {
  config.blocks.blocksConfig.textWithBackgroundColor = {
    id: 'textWithBackgroundColor',
    title: 'Text with background color',
    icon: textSVG,
    group: 'text',
    view: withStyleWrapper(TextWithBackgroundColorView),
    edit: withStyleWrapper(TextWithBackgroundColorEdit),
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    availableColors: ['#ebebeb', '#ddeeff'],
  };
  config.widgets.widget.style_simple_color = SimpleColorPicker;
  return config;
};
