(function() {var implementors = {};
implementors["dock_runtime"] = [{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;BlobError&lt;T&gt;&gt; for &amp;'static str","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;BlobError&lt;T&gt;&gt; for DispatchError","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;Error&lt;T&gt;&gt; for &amp;'static str","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;Error&lt;T&gt;&gt; for DispatchError","synthetic":false,"types":[]},{"text":"impl From&lt;Event&gt; for ()","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;MasterError&lt;T&gt;&gt; for &amp;'static str","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;MasterError&lt;T&gt;&gt; for DispatchError","synthetic":false,"types":[]},{"text":"impl&lt;Call&gt; From&lt;RawEvent&lt;Call&gt;&gt; for ()","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;RevErr&lt;T&gt;&gt; for &amp;'static str","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;RevErr&lt;T&gt;&gt; for DispatchError","synthetic":false,"types":[]},{"text":"impl From&lt;RawEvent&lt;&lt;Runtime as Trait&gt;::AccountId&gt;&gt; for Event","synthetic":false,"types":[]},{"text":"impl From&lt;Event&gt; for Event","synthetic":false,"types":[]},{"text":"impl From&lt;RawEvent&lt;&lt;Runtime as Trait&gt;::AccountId, &lt;Runtime as Trait&gt;::BlockNumber&gt;&gt; for Event","synthetic":false,"types":[]},{"text":"impl From&lt;Event&gt; for Event","synthetic":false,"types":[]},{"text":"impl From&lt;RawEvent&lt;&lt;Runtime as Trait&gt;::AccountId, &lt;Runtime as Trait&lt;DefaultInstance&gt;&gt;::Balance, DefaultInstance&gt;&gt; for Event","synthetic":false,"types":[]},{"text":"impl From&lt;Event&gt; for Event","synthetic":false,"types":[]},{"text":"impl From&lt;Event&gt; for Event","synthetic":false,"types":[]},{"text":"impl From&lt;RawEvent&lt;&lt;Runtime as Trait&gt;::Call&gt;&gt; for Event","synthetic":false,"types":[]},{"text":"impl From&lt;RawEvent&lt;&lt;Runtime as Trait&gt;::AccountId&gt;&gt; for Event","synthetic":false,"types":[]},{"text":"impl From&lt;RawEvent&lt;&lt;Runtime as Trait&gt;::AccountId&gt;&gt; for Event","synthetic":false,"types":[]},{"text":"impl From&lt;RawOrigin&lt;&lt;Runtime as Trait&gt;::AccountId&gt;&gt; for OriginCaller","synthetic":false,"types":[]},{"text":"impl From&lt;RawOrigin&lt;&lt;Runtime as Trait&gt;::AccountId&gt;&gt; for Origin","synthetic":false,"types":[]},{"text":"impl From&lt;OriginCaller&gt; for Origin","synthetic":false,"types":[]},{"text":"impl From&lt;Option&lt;&lt;Runtime as Trait&gt;::AccountId&gt;&gt; for Origin","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime, DefaultInstance&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]},{"text":"impl From&lt;&lt;Module&lt;Runtime&gt; as Callable&lt;Runtime&gt;&gt;::Call&gt; for Call","synthetic":false,"types":[]}];
implementors["poa"] = [{"text":"impl&lt;AccountId, BlockNumber&gt; From&lt;RawEvent&lt;AccountId, BlockNumber&gt;&gt; for ()","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;Error&lt;T&gt;&gt; for &amp;'static str","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;Error&lt;T&gt;&gt; for DispatchError","synthetic":false,"types":[]}];
implementors["token_migration"] = [{"text":"impl&lt;AccountId&gt; From&lt;RawEvent&lt;AccountId&gt;&gt; for ()","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;Error&lt;T&gt;&gt; for &amp;'static str","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; From&lt;Error&lt;T&gt;&gt; for DispatchError","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()