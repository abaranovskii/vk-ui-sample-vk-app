import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group, Cell, Avatar, List, Button, Header, HeaderButton, platform, IOS } from '@vkontakte/vkui';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

class EpicPanel extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'more'
	  };
	  this.onStoryChange = this.onStoryChange.bind(this);
	}
  
	onStoryChange (e) {
	  this.setState({ activeStory: e.currentTarget.dataset.story })
	}
  
	render () {
  
	  return (
		<Epic activeStory={this.state.activeStory} tabbar={
		  <Tabbar>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'feed'}
			  data-story="feed"
			><Icon28Newsfeed /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'discover'}
			  data-story="discover"
			><Icon28Search /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'messages'}
			  data-story="messages"
			  label="12"
			><Icon28Messages /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'notifications'}
			  data-story="notifications"
			><Icon28Notifications /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'more'}
			  data-story="more"
			><Icon28More /></TabbarItem>
		  </Tabbar>
		}>
		  <View id="feed" activePanel="feed">
			<Panel id="feed">
			  <PanelHeader>Feed</PanelHeader>
			</Panel>
		  </View>
		  <View id="discover" activePanel="discover">
			<Panel id="discover">
			  <PanelHeader>Discover</PanelHeader>
			</Panel>
		  </View>
		  <View id="messages" activePanel="messages">
			<Panel id="messages">
			  <PanelHeader>Messages</PanelHeader>
			</Panel>
		  </View>
		  <View id="notifications" activePanel="notifications">
			<Panel id="notifications">
			  <PanelHeader>Notifications</PanelHeader>
			</Panel>
		  </View>
		  <View id="more" activePanel="more">
			<Panel id="more">
			  <PanelHeader>More</PanelHeader>
			</Panel>
		  </View>
		</Epic>
	  )
	}
  }
  
export default EpicPanel;