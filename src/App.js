import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { Gallery, Switch, Avatar, ActionSheet, ActionSheetItem, Cell, Div, Footer, Group, List, Button, Panel, PanelHeader, View, Epic, Tabbar, TabbarItem, platform, IOS } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import FormPanel from './panels/Form';
import AvatarPanel from './panels/Avatar';

import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Icon24About from '@vkontakte/icons/dist/24/article';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';

const osname = platform();

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			activeStory: 'feed',
			popout: null,
			removeList: ['Михаил Андриевский', 'Вадим Дорохов', 'Саша Колобов'],
			draggingList: ['Say', 'Hello', 'To', 'My', 'Little', 'Friend'],
			slideIndex: 0,
		};

		this.openSheet = this.openSheet.bind(this);
		this.onStoryChange = this.onStoryChange.bind(this);
	}

	onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	  }

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
		this.openSheet();
	}

	go = (e) => {
		console.log(e);
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	openSheet () {
		this.setState({ popout:
		  <ActionSheet
			onClose={() => this.setState({ popout: null })}
			title="Hi!"
			text="I am action sheet"
		  >
			<ActionSheetItem autoclose>Action</ActionSheetItem>
			<ActionSheetItem autoclose theme="destructive">Sheet</ActionSheetItem>
			{osname === IOS && <ActionSheetItem autoclose theme="cancel">Cancel</ActionSheetItem>}
		  </ActionSheet>
		});
	  }

	render() {
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
				  ><Icon24Settings /></TabbarItem>
				  <TabbarItem
					onClick={this.onStoryChange}
					selected={this.state.activeStory === 'notifications'}
					data-story="notifications"
					label="12"
				  ><Icon28Notifications /></TabbarItem>
				  <TabbarItem
					onClick={this.onStoryChange}
					selected={this.state.activeStory === 'more'}
					data-story="more"
				  ><Icon28More /></TabbarItem>
				</Tabbar>
			  }>
				<View id="discover" activePanel="discover">
				  <Panel id="discover">
					<PanelHeader>Discover</PanelHeader>
						<Group title="Многострочность">
							<List>
								<Cell multiline>A Series of Unfortunate Events, Archer, Brooklyn Nine-Nine, Doctor Who, Game of Thrones</Cell>
								<Cell multiline>The Avalanches</Cell>
							</List>
						</Group>

						<Group title="Подпись">
							<List>
								<Cell description="Depeche Mode">Where’s the Revolution</Cell>
								<Cell description="The Weeknd">I Feel It Coming (Feat. Daft Punk)</Cell>
							</List>
						</Group>

						<Group title="Большая ячейка">
							<List>
								<Cell
								before={<Avatar size={72} />}
								size="l"
								description="Друзья в Facebook"
								asideContent={<Icon24MoreHorizontal />}
								bottomContent={
									<div style={{ display: 'flex' }}>
									<Button size="m">Добавить</Button>
									<Button size="m" level="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
									</div>
								}
								>
								Семён Ефимов</Cell>
								<Cell
								before={<Avatar size={72} />}
								size="l"
								description="29 лет, Санкт-Петербург"
								asideContent={<Icon24MoreHorizontal />}
								bottomContent={
									<div style={{ display: 'flex' }}>
									<Button size="m">Добавить</Button>
									<Button size="m" level="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
									</div>
								}
								>
								Александр Попов</Cell>
								<Cell
								before={<Avatar size={72} />}
								size="l"
								description="Команда ВКонтакте"
								asideContent={<Icon24MoreHorizontal />}
								bottomContent={
									<div style={{ display: 'flex' }}>
									<Button size="m">Добавить</Button>
									<Button size="m" level="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
									</div>
								}
								>
								Екатерина Скобейко</Cell>
							</List>
						</Group>

						<Group title="Иконки">
							<List>
								<Cell before={<Icon24About />}>Информация</Cell>
								<Cell before={<Icon24Services />}>Сервисы</Cell>
							</List>
						</Group>

						<Group title="Чекбоксы">
							<List>
								<Cell selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Артур Стамбульцян</Cell>
								<Cell selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Тимофей Чаптыков</Cell>
								<Cell selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Влад Анесов</Cell>
							</List>
						</Group>

						{this.state.removeList.length > 0 &&
							<Group title="Удаление">
								<List>
								{this.state.removeList.map((item, index) => (
									<Cell key={item} removable onRemove={() => {
									this.setState({
										removeList: [...this.state.removeList.slice(0, index), ...this.state.removeList.slice(index + 1)]
									})
									}}>{item}</Cell>
								))}
								</List>
							</Group>
						}
							
						{this.state.removeList.length > 0 &&
							<Group title="Перетаскивание">
								<List>
								{this.state.draggingList.map((item) => (
									<Cell key={item} draggable onDragFinish={({ from, to }) => {
									const draggingList = [...this.state.draggingList];
									draggingList.splice(from, 1);
									draggingList.splice(to, 0, this.state.draggingList[from]);
									this.setState({ draggingList });
									}}>{item}</Cell>
								))}
								</List>
							</Group>
            			}
				  </Panel>
				</View>
				<View id="messages" activePanel="messages">
				  <Panel id="messages">
					<PanelHeader>Messages</PanelHeader>
					<Group>
							<List>
								<Cell asideContent={<Switch />}>
									Комментарии к записям
								</Cell>
								<Cell asideContent={<Switch defaultChecked />}>
									Ссылки
								</Cell>
								<Cell asideContent={<Switch disabled />}>
									Фотоальбомы
								</Cell>
							</List>
					</Group>
				  </Panel>
				</View>
				<View id="notifications" activePanel="notifications">
				  <Panel id="notifications">
					<PanelHeader>Gallery</PanelHeader>
					<Group title="Sticks right">
						<Gallery
							slideWidth="90%"
							style={{ height: 150 }}
							bullets="dark"
						>
							<div style={{ backgroundColor: 'var(--destructive)' }} />
							<div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
							<div style={{ backgroundColor: 'var(--accent)' }} />
						</Gallery>
						</Group>
						<Group title="Sticks left">
						<Gallery
							slideWidth="90%"
							align="right"
							style={{ height: 150 }}
						>
							<div style={{ backgroundColor: 'var(--destructive)' }} />
							<div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
							<div style={{ backgroundColor: 'var(--accent)' }} />
						</Gallery>
						</Group>
						<Group title="Centered">
						<Gallery
							slideWidth="90%"
							align="center"
							style={{ height: 150 }}
						>
							<div style={{ backgroundColor: 'var(--destructive)' }} />
							<div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
							<div style={{ backgroundColor: 'var(--accent)' }} />
						</Gallery>
						</Group>
						<Group title="Custom width">
						<Gallery
							slideWidth="custom"
							style={{ height: 150 }}
						>
							<div style={{ width: 200, backgroundColor: 'var(--destructive)' }} />
							<div style={{ width: 120, backgroundColor: 'var(--button_commerce_background)' }} />
							<div style={{ width: 70, backgroundColor: 'var(--accent)' }} />
							<div style={{ width: 220, backgroundColor: 'var(--icon_secondary)' }} />
						</Gallery>
						</Group>
						<Group title="Controled">
						<Gallery
							slideWidth="90%"
							align="center"
							style={{ height: 150 }}
							slideIndex={this.state.slideIndex}
							onChange={slideIndex => this.setState({slideIndex})}
						>
							<div style={{ backgroundColor: 'var(--destructive)' }} />
							<div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
							<div style={{ backgroundColor: 'var(--accent)' }} />
						</Gallery>
						<Div>
							<Button onClick={() => this.setState({slideIndex: this.state.slideIndex === 2 ? 0 : this.state.slideIndex + 1 })}>Next slide</Button>
						</Div>
						</Group>
				  </Panel>
				</View>
				<View popout={this.state.popout} id="more" activePanel='more'>
					<Panel id="more">
						<PanelHeader>
							Action Sheet Sample
						</PanelHeader>
						<Div>
							<Button size="xl" onClick={this.openSheet}>Open Sheet</Button>
						</Div>
					</Panel>
				</View>
				<View id='feed' activePanel={this.state.activePanel}>
					<Panel id="home">
						<PanelHeader>
						VK UI Samples
						</PanelHeader>
						<Group>
							<List>
								<Cell expandable onClick={this.go} data-to='avatar'>Avatar</Cell>
								<Cell expandable onClick={this.go} data-to='form'>Form</Cell>
								<Cell expandable>Приватность</Cell>
							</List>
						</Group>
						<Footer>3 примера</Footer>
					</Panel>
					<AvatarPanel id='avatar' go={this.go} />
					<FormPanel id='form' go={this.go} />
				</View>
			  </Epic>
		);
	}
}

export default App;
