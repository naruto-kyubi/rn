import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import HTML from 'react-native-render-html';

class Detail extends PureComponent {

    componentDidMount() {
      const { dispatch } = this.props;

      let { id } = this.props.navigation.state.params;

      dispatch({
        type: 'article/fetchArticleById',
        payload: {
          id,
        },
      });

    }
  
    render() {
      const { articleDetail } = this.props;
      if(!articleDetail) return null;

      const { data } = articleDetail;
      if(!data) return null;
      return (
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flexDirection:"column",alignItems:"center"}}>
            <Text>{ data.title }</Text>
            <Text>{ data.owner.nickname }</Text>
          </View>
          <HTML html={ data.contentHtml } imagesMaxWidth={Dimensions.get('window').width} />
      </ScrollView>
      );
    }
  }
  
function mapStateToProps(state) {
    return { 
        articleDetail: state.article.articleDetail,
     };
}
  
export default connect(mapStateToProps)(Detail);