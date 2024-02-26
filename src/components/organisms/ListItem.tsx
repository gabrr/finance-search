import React, { ReactNode } from "react";

import {
  Category,
  CategoryKeys,
  IFinanceSearchItem,
} from "../../data/models/IFinanceSearchItem.d";

import {
  BsMusicNoteList,
  IoDocumentsSharp,
  MdOutlinePlayCircleFilled,
} from "../atoms";

import { Tooltip } from "../molecules";

const ICONS: { [key in CategoryKeys]: ReactNode } = {
  BLOG_POSTS: <IoDocumentsSharp />,
  PLAYLISTS: <BsMusicNoteList />,
  VIDEOS: <MdOutlinePlayCircleFilled />,
};

interface ListItemProps extends IFinanceSearchItem {
  index: number;
}

const ListItem: React.FC<ListItemProps> = ({
  category,
  title,
  description,
  url,
  index,
}) => (
  <div
    className="border border-gray-200 px-5 py-3 border-solid rounded-lg"
    data-test="list-item"
  >
    <div className="flex gap-3 items-center mb-1">
      <Tooltip data-test={`icon-${category}`} text={Category[category]}>
        {ICONS[category]}
      </Tooltip>

      <a
        data-test="list-item-title-link"
        href={url}
        rel="noreferrer"
        target="_blank"
        className="text-nowrap overflow-hidden"
      >
        <p
          data-test="list-item-title"
          className="text-base text-gray-500 text-ellipsis overflow-hidden"
        >
          {title}
        </p>
      </a>
    </div>
    <p data-test="list-item-description" className="text-sm text-gray-400">
      {description}
    </p>
  </div>
);

export default ListItem;
