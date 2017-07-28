$(function() {
    /*test suite named "RSS Feeds" */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('url is not null',function(){
          for(i=0;i<allFeeds.length;i++)
          {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url).not.toBe(0);
            expect(allFeeds[i].url.length).not.toBe(0);
          }
        });

         it('name is defined and not empty',function(){
           for(i=0;i<allFeeds.length;i++)
           {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name).not.toBe(0);
             expect(allFeeds[i].name.length).not.toBe(0);
           }
         });
    });

    /*test suite named "The menu" */
    describe('The menu',function(){
      it('menu element is hidden by default',function(){
        expect($('body').hasClass("menu-hidden")).toBe(true);
      });

      it('menu toggles on clicking',function(){
        $(".menu-icon-link").click();
        expect($('body').hasClass("menu-hidden")).toBe(false);
        $(".menu-icon-link").click();
        expect($('body').hasClass("menu-hidden")).toBe(true);
      });
    });

    /*test suite named "Initial Entries" */
    describe('Initial Entries', function() {
            beforeEach(function(done) {
                loadFeed(0, function() {
                    done();
                });
            });

            it('has atleast single entry', function(done) {
                expect($('.feed .entry').length > 0).toBe(true);
                done();
            });
        });

    /*test suite named "New Feed Selection" */
    describe('New Feed Selection',function(){
      var previous,next;
      beforeEach(function(done){
        loadFeed(0,function(){
          previous=$('.feed').html();
          loadFeed(1,function(){
            next=$('.feed').html();
            done();
          });
        });
      });
      it('next actually changes value of previous',function(){
        expect(previous).not.toEqual(next);
      });
    });
}());
