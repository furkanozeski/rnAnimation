import React, { useCallback, useState } from 'react';
import SwipeableViewProps from '@src/types/SwipeableViewPropType';
import { ListRenderItemInfo } from 'react-native/Libraries/Lists/VirtualizedList';
import Animated, { BounceInLeft, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import TrashBinIcon from 'react-native-vector-icons/Feather';
import CheckMarkCircle from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import SwipeableView from '../SwipeableView/SwipeableView';

const mockData: Array<SwipeableViewProps> = [
  {
    text: 'Mock 1',
    date: new Date('23.07.2023'),
  },
  {
    text: 'Mock 2',
    date: new Date('05.07.2023'),
  },
  {
    text: 'Mock 3',
    date: new Date('06/07/2023'),
  },
  {
    text: 'Mock 4',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 5',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 6',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 7',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 8',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 9',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 10',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 11',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 12',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 13',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 14',
    date: new Date('06.07.2023'),
  },
  {
    text: 'Mock 15',
    date: new Date('06.07.2023'),
  },
];

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const PLACEHOLDER_KEY: string = '';

export default function AnimatedList() {
  const [isSelected, setIsSelected] = useState({ [PLACEHOLDER_KEY]: { selected: false, name: '' } });
  const [listData, setListData] = useState(mockData);

  const onDelete = useCallback((text: string) => {
    setListData((element) => element.filter((e) => e.text !== text));
  }, [listData]);

  const handleTouchEvent = (text: string) => {

    if (!isSelected?.[text]?.selected) {
      setIsSelected((prevState) => ({
        ...prevState,
        [text]: {
          selected: true,
          name: text
        }
      }));
    } else {
      setIsSelected((prevState) => ({
        ...prevState,
        [text]: {
          selected: false,
          name: prevState?.[text]?.name
        }
      }));
    }
  };

  const renderLeadingIcon = useCallback((contentId: string) => (
    <TouchableOpacity
      onPress={(event) => {
        handleTouchEvent(contentId);
      }}
    >
      {
        isSelected?.[contentId]?.selected
          && isSelected?.[contentId]?.name === contentId
          ? (
            <CheckMarkCircle
              color="green"
              name="checkmark-done-circle"
              size={23}
            />
          ) : (
            <CheckMarkCircle
              color="black"
              name="checkmark-circle-outline"
              size={23}
            />
          )
      }
    </TouchableOpacity>
  ), [isSelected]);

  const renderTrailingIcon = useCallback(() => (
    <TrashBinIcon
      color="black"
      name="trash-2"
      size={23}
    />
  ), []);

  const SwipeableViewCallback = useCallback(
    ({ item }: ListRenderItemInfo<SwipeableViewProps>) => (
      <SwipeableView
        text={item.text}
        leadingIcon={renderLeadingIcon}
        trailingIcon={renderTrailingIcon}
        onDelete={onDelete}
        key={item.text}
      />
    ),
    [renderLeadingIcon, renderTrailingIcon, onDelete]
  );

  return (
    <Animated.FlatList
      data={listData}
      renderItem={SwipeableViewCallback}
      style={{ flex: 1 }}
      contentContainerStyle={{
        justifyContent: 'center',
      }}
      entering={BounceInLeft}
      exiting={FadeInRight}
      alwaysBounceVertical
      keyExtractor={(item) => item.text}
    />
  );
}
