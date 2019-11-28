import React from 'react';
import { connect } from 'react-redux';

import { View, Text, FlatList, Dimensions ,StyleSheet,TouchableOpacity} from 'react-native';

//获取屏幕的宽度和高度
const {width, height} = Dimensions.get('window');

/**
 * 文章显示列表
 */
class Article extends React.Component {

    componentDidMount(){
      const { dispatch } = this.props;
      dispatch({
        type: 'article/fetchArticleList',
        payload:{},
      });
    }

    /**
     * 加载记录
     */
    loadRecord=()=>{

    }

    /**
       * 下拉刷新
       * @private
       */
      _onRefresh = () => {
        // 不处于 下拉刷新
        if (!this.state.isRefresh) {
            this.page = 1
            this._getHotList()
        }
    };

    /**
     * 加载历史更多
     * @private
     */
    _onLoadMore() {
        // 不处于正在加载更多 && 有下拉刷新过，因为没数据的时候 会触发加载
        if (!this.state.isLoadMore && this.state.dataSource.length > 0 && this.state.showFoot !== 2) {
            this.page = this.page + 1
            this._getHotList()
        }
    }
    
    /**
     * 绘制分割线
     */
    _renderSeperator = (sectionID, rowID, adjacentRowHighlighted)=> {
      return (
        <View
          key={`${sectionID}-${rowID}`}
          style={{
            height: adjacentRowHighlighted ? 4 : 1,
            backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
          }}
        />
      );
    }

    _createListItem(item) {
      return (
          <TouchableOpacity activeOpacity={0.5} onPress={() => this._onItemClick(item)}>
             <View style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  // justifyContent: 'center',
                  marginTop: 5,
                  backgroundColor: '#fff',
                  padding: 10
              }}>
                <View>
                    {/* <Image source={{uri: item.logo_url}} style={styles.itemImages}/> */}
                    <Text style={{marginLeft: 6}}>
                        {item.title}
                    </Text>
                </View>
                <View>
                  <Text style={{marginLeft: 6}}>
                        {item.owner.nickname}
                    </Text>
                </View>
              </View>
          </TouchableOpacity>
      );
    }

    /**
     * 跳转到详细内容页面
     * @param {*} item 
     */
    _onItemClick(item) {
      
      const { navigate } = this.props.navigation;
      navigate('Detail', {id: item.id});
    }

    render() {
      const { articleList } = this.props;
      const{ data } = articleList;
      if(!data) return null;
      
      return (
        <View style={styles.container}>
       
          <FlatList
            data= {data}
            renderItem={({item}) => this._createListItem(item)}
            ItemSeparatorComponent={this._renderSeperator}
          >
          </FlatList>
        </View>

      );
    }
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headView: {
        width: width,
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerView: {
        flexDirection: 'row',
        width: width,
        height: 50,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemImages: {
        width: 60,
        height: 60,
        resizeMode: 'stretch'
    },
});

function mapStateToProps(state) {
    return { 
      count:state.article.count,
      list:state.article.list,
      articleList: state.article.articleList,
     } ;
}
  
export default connect(mapStateToProps)(Article);