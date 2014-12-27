#!/bin/base

CURRDIR=`pwd`
BASEDIR=$CURRDIR/..
DISTDIR=$BASEDIR/target/dist

package(){
    rm -rf $DISTDIR/*
    mkdir -p $DISTDIR

    #1 package all sub modules
    cd $BASEDIR
    sbt xitrum-package

    #2 collect all modules to root project.
    if [ -d $BASEDIR/target/xitrum ]; then
        cp -rf $BASEDIR/target/xitrum/* $DISTDIR
    fi

    dirs=$(ls -l $BASEDIR |awk '/^d/ {print $NF}')
    for dir in $dirs
        do
           if [ -d $BASEDIR/$dir/target/xitrum ]; then
              cp -rf $BASEDIR/$dir/target/xitrum/* $DISTDIR
           fi
        done

    #3 separate gui and server jars.
    extractGUI
}

extractGUI(){
    cd $DISTDIR
    files=$(ls -l "$DISTDIR/lib" |awk '/^[^d]/ {print $NF}')
    for f in $files
        do
            if [ -f lib/$f ]; then
                json=`jar vtf lib/$f | grep "web.json"`
                if [ -n "$json" ]; then
                    echo "Found web jar file: $f"
                    mkdir -p gui_lib
                    mv lib/$f gui_lib/$f
                fi
            fi
        done
}

package