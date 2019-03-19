const styles = {
  itemContainer: {
    position: 'absolute',
    height:'50%',
    width:'100%',
    //backgroundColor:'red'
  },
  itemImage: {
    flex: 1,
    width:'100%',
  },
  touchableContainer: {
    flex: 1,
    width:'100%',
  },
  overlay: {
    position: 'absolute',
    resizeMode: 'stretch',
  },
  itemTitleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 25,
    zIndex: 1,
  },
  itemTitle: {
    backgroundColor: 'transparent',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  itemSubtitle: {
    backgroundColor: 'transparent',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18,
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  navigationContainer: {
    position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // borderWidth:1,
    // borderColor:'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 5,
    paddingBottom: 15,
    alignSelf:'center',
    paddingTop: 15,
    flexDirection: 'row',
    marginTop:'60%',
    //zIndex: 1,
    elevation: 1,
  },
  navigationItem: {
    backgroundColor: 'transparent',
    height: 10,
    width: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 1.2,
    borderColor: 'white',
  },
  navigationItemSquares: {
    borderRadius: 0,
    height: 8,
    width: 8,
    marginLeft: 6,
    marginRight: 6,
  },
  navigationItemBars: {
    borderRadius: 0,
    height: 2,
    width: 20,
  }
};

export default styles;
