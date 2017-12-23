import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from "react-native";
import PropTypes from 'prop-types';
import {List, ListItem, SearchBar} from "react-native-elements";

import * as css from '../../assets/styles';

class HomeScreen extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.page, this.props.seed);
    };

    handleRefresh = () => {
        this.props.fetchUser(1, this.props.seed + 1);
    };

    handleLoadMore = () => {
        this.props.fetchUser(this.props.page + 1, this.props.seed);
    };

    renderSeparator = () => {
        return (<View style={styles.separator}/>);
    };

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." containerStyle={styles.search} round/>;
    };

    renderItem = (item) => {
        return <ListItem
            roundAvatar
            title={item.displayName}
            subtitle={item.email}
            avatar={{uri: item.thumbnail}}
            containerStyle={{borderBottomWidth: 0}}
            button onPress={() => this.props.navigation.navigate('Details',
            {
                displayName: item.displayName,
                email: item.email,
                picture: item.photo
            })}
        />
    };

    renderFooter = () => {
        if (!this.props.loading)
            return null;

        return (
            <View style={styles.footer}>
                <ActivityIndicator animating size="large"/>
            </View>
        );
    };

    render() {
        return (
            <List
                containerStyle={[css.scrollView.default,css.containers.screen, css.containers.list]}>
                <FlatList
                    data={this.props.list}
                    renderItem={({item}) => this.renderItem(item)}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.props.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.2}/>
            </List>
        );
    }
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: css.colors.primaryBackgroundColor,
        borderBottomWidth: 0,
        borderTopWidth: 0

    },
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: css.colors.primaryDarkColor,
        marginLeft: "14%"
    },
    footer: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    },
});

HomeScreen.propTypes = {
    loading: PropTypes.bool,
    refreshing: PropTypes.bool,
    list: PropTypes.array,
    page: PropTypes.number,
    seed: PropTypes.number,
    error: PropTypes.object,
    fetchUser: PropTypes.func
};

export default HomeScreen;