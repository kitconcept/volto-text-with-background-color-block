import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';
import { DetachedTextBlockEditor } from 'volto-slate/blocks/Text/DetachedTextBlockEditor';

const TextWithBackgroundColorEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;

  return (
    <div className="textWithBackgroundColorWrapper">
      <DetachedTextBlockEditor {...props} />
      <SidebarPortal selected={selected}>
        <Sidebar
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </div>
  );
};

export default TextWithBackgroundColorEdit;
