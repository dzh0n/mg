package com.transistorsoft.cordova.backgroundfetch;
import android.content.Context;
import com.transistorsoft.tsbackgroundfetch.BackgroundFetch;
import android.util.Log;

public class BackgroundFetchHeadlessTask implements HeadlessTask {
    @Override
    public void onFetch(Context context) {
        Log.d(BackgroundFetch.TAG, "My BackgroundFetchHeadlessTask:  onFetch");
        // Perform your work here.

        // Just as in Javascript callback, you must signal #finish
        BackgroundFetch.getInstance(context).finish();
    }
}
